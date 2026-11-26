"use client";
import React from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import {
  farmShopCategories,
  cosmeticRanges,
  productsIn,
  formatProductPrice,
} from "./farmShopProducts";

const ProductCard = ({ product }) => (
  <div className="col-sm-6 col-lg-4">
    <Link href={`/farm-shop/${product.slug}`} className="shop-card">
      <ProductImage product={product} />
      <div className="shop-card__body">
        <h4>{product.name}</h4>
        <p className="size">{product.size}</p>
        <p className="price">{formatProductPrice(product.price)}</p>
        <span className="th-btn style1 w-100 text-center">View product</span>
      </div>
    </Link>
    <style jsx>{`
      :global(.shop-card) {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #ffffff;
        border-radius: 20px;
        padding: 16px;
        border: 2px solid #e5eee8;
        box-shadow: 0 8px 30px rgba(38, 57, 37, 0.1);
        transition: all 0.3s ease;
        color: inherit;
      }
      :global(.shop-card:hover) {
        transform: translateY(-6px);
        border-color: #8b7355;
        box-shadow: 0 20px 50px rgba(38, 57, 37, 0.18);
      }
      .shop-card__body {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px 4px 4px;
      }
      h4 {
        font-size: 19px;
        color: #1f3127;
        font-weight: 700;
        margin: 0 0 4px;
      }
      .size {
        font-size: 14px;
        color: #6a746a;
        margin: 0 0 10px;
      }
      .price {
        font-size: 18px;
        font-weight: 700;
        color: #8b7355;
        margin: 0 0 16px;
      }
      .shop-card__body :global(.th-btn) {
        margin-top: auto;
      }
    `}</style>
  </div>
);

const FarmShop = () => {
  const [oliveOil, cosmetics] = farmShopCategories;

  return (
    <div className="farm-shop">
      <section className="shop-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 text-center">
              <span className="sub-title style1">Farm Shop</span>
              <h2 className="sec-title">From Our Olive Grove to Your Home</h2>
              <p className="sec-text">
                Olive oil and natural cosmetics made from the olives of the House of Andalus.
                Our first harvest products are on their way. Register your interest and we will
                let you know as soon as they are ready.
              </p>
              <div className="jump-links">
                {farmShopCategories.map((c) => (
                  <a key={c.id} href={`#${c.id}`} className="th-btn style3">
                    {c.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={oliveOil.id} className="shop-section">
        <div className="container">
          <div className="section-head text-center">
            <h3 className="section-heading">{oliveOil.title}</h3>
            <p className="section-subtext">{oliveOil.intro}</p>
          </div>
          <div className="row g-4 shop-grid">
            {productsIn(oliveOil.id).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id={cosmetics.id} className="shop-section space-bottom">
        <div className="container">
          <div className="section-head text-center">
            <h3 className="section-heading">{cosmetics.title}</h3>
            <p className="section-subtext">{cosmetics.intro}</p>
          </div>
          {cosmeticRanges.map((range) => (
            <div key={range.id} className="range">
              <h4 className="range-title">{range.name} Range</h4>
              <div className="row g-4 shop-grid">
                {productsIn(cosmetics.id, range.id).map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .farm-shop {
          background: linear-gradient(180deg, #fff9f3 0%, #ffffff 100%);
        }
        .shop-hero {
          padding: 80px 0 40px;
        }
        .sub-title {
          display: inline-block;
          color: #8b7355;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .sec-title {
          font-size: 42px;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #1f3127;
          font-weight: 700;
        }
        .sec-text {
          font-size: 18px;
          line-height: 1.7;
          color: #3c433c;
          max-width: 720px;
          margin: 0 auto;
        }
        .jump-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }
        .shop-section {
          padding: 50px 0;
        }
        .section-head {
          max-width: 720px;
          margin: 0 auto 36px;
        }
        .section-heading {
          font-size: 32px;
          color: #1f3127;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .section-subtext {
          font-size: 16px;
          color: #3c433c;
          line-height: 1.7;
        }
        .shop-grid {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }
        .range + .range {
          margin-top: 50px;
        }
        .range-title {
          max-width: 1100px;
          margin: 0 auto 20px;
          text-align: center;
          font-size: 22px;
          color: #8b7355;
          font-weight: 700;
          font-style: italic;
        }
        @media (max-width: 767px) {
          .shop-hero {
            padding: 50px 0 20px;
          }
          .sec-title {
            font-size: 30px;
          }
          .section-heading {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
};

export default FarmShop;
