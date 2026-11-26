"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ProductImage from "./ProductImage";
import { findProduct, productsIn, formatProductPrice, cosmeticRanges } from "./farmShopProducts";

const emptyForm = { name: "", email: "", quantity: 1, message: "" };

const FarmShopProduct = ({ slug }) => {
  const product = findProduct(slug);
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Other items in the same range (cosmetics) or category (olive oil)
  const related = productsIn(product.category, product.range).filter((p) => p.slug !== product.slug);
  const rangeName = cosmeticRanges.find((r) => r.id === product.range)?.name;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!formData.name || !formData.email) {
      setStatus({ type: "error", message: "Name and email are required." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    setSubmitting(true);
    try {
      if (!executeRecaptcha) {
        setStatus({ type: "error", message: "Recaptcha not ready." });
        setSubmitting(false);
        return;
      }
      const token = await executeRecaptcha("farm_shop_interest");

      const res = await fetch("/api/farm-shop-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, slug: product.slug, token }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      } else {
        setStatus({
          type: "success",
          message: "Thank you. We have noted your interest and will email you as soon as this product is available.",
        });
        setFormData(emptyForm);
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please retry in a moment." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="product-page">
      <section className="product-main">
        <div className="container">
          <Link href={`/farm-shop#${product.category}`} className="back-link">
            ← Back to Farm Shop
          </Link>
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <ProductImage product={product} large />
            </div>
            <div className="col-lg-6">
              <span className="sub-title style1">
                {product.category === "olive-oil" ? "Olive Oil" : `${rangeName} Range`}
              </span>
              <h2 className="product-title">{product.name}</h2>
              <p className="product-size">{product.size}</p>
              <p className="product-price">{formatProductPrice(product.price)}</p>
              <p className="product-text">{product.description}</p>

              <form className="interest-form" onSubmit={handleSubmit} noValidate>
                <h4>Register your interest</h4>
                <p className="form-intro">
                  This product will be available after our harvest. Leave your details and we will
                  email you when it is ready to order.
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. Amina Rahman"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="you@example.com"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      max={50}
                      value={formData.quantity}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">Message</label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <button type="submit" className="th-btn style1 w-100 mt-4" disabled={submitting}>
                  {submitting ? "Sending..." : "Register Interest"}
                </button>
                {status.message && (
                  <p className={`mt-3 mb-0 ${status.type === "error" ? "text-danger" : "text-success"}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related space-bottom">
          <div className="container">
            <h3 className="related-title">
              {product.category === "olive-oil" ? "More olive oil" : `More from the ${rangeName} range`}
            </h3>
            <div className="row g-4">
              {related.map((p) => (
                <div className="col-sm-6 col-lg-3" key={p.slug}>
                  <Link href={`/farm-shop/${p.slug}`} className="related-card">
                    <ProductImage product={p} />
                    <h5>{p.name}</h5>
                    <p>{p.size}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .product-page {
          background: linear-gradient(180deg, #fff9f3 0%, #ffffff 100%);
        }
        .product-main {
          padding: 60px 0;
        }
        .product-main :global(.back-link) {
          display: inline-block;
          margin-bottom: 28px;
          color: #8b7355;
          font-weight: 600;
        }
        .sub-title {
          display: inline-block;
          color: #8b7355;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .product-title {
          font-size: 38px;
          color: #1f3127;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .product-size {
          color: #6a746a;
          margin-bottom: 12px;
        }
        .product-price {
          font-size: 26px;
          font-weight: 700;
          color: #8b7355;
          margin-bottom: 18px;
        }
        .product-text {
          font-size: 17px;
          line-height: 1.8;
          color: #3c433c;
        }
        .interest-form {
          margin-top: 28px;
          background: #ffffff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid #edd9c9;
          box-shadow: 0 8px 30px rgba(38, 57, 37, 0.08);
        }
        .interest-form h4 {
          font-size: 22px;
          color: #1f3127;
          margin-bottom: 6px;
        }
        .form-intro {
          font-size: 14px;
          color: #6a746a;
          margin-bottom: 18px;
        }
        .interest-form .form-label {
          font-weight: 600;
          font-size: 14px;
        }
        .interest-form .form-control {
          background: #fff;
          border: 1px solid #d9e6e0;
          border-radius: 10px;
          min-height: 46px;
        }
        .related-title {
          font-size: 26px;
          color: #1f3127;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .related :global(.related-card) {
          display: block;
          background: #fff;
          border-radius: 18px;
          padding: 12px;
          border: 2px solid #e5eee8;
          color: inherit;
          height: 100%;
          transition: border-color 0.3s ease;
        }
        .related :global(.related-card:hover) {
          border-color: #8b7355;
        }
        .related h5 {
          font-size: 16px;
          margin: 12px 4px 2px;
          color: #1f3127;
        }
        .related p {
          font-size: 13px;
          color: #6a746a;
          margin: 0 4px 4px;
        }
        @media (max-width: 767px) {
          .product-main {
            padding: 36px 0;
          }
          .product-title {
            font-size: 28px;
          }
          .interest-form {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FarmShopProduct;
