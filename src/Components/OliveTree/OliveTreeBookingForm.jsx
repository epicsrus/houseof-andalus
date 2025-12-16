"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const priceTable = { 1: 50, 2: 95, 3: 135, 4: 170, 5: 200 };
const priceForCount = (count) => {
  if (!Number.isFinite(count) || count <= 0) return 0;
  return priceTable[count] ?? Math.round(count * 45);
};

const OliveTreeBookingForm = () => {
  const searchParams = useSearchParams();
  const initialCount = Number(searchParams.get("count")) || 1;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    treeCount: initialCount,
    engravingNames: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (initialCount > 0) {
      setFormData((prev) => ({ ...prev, treeCount: initialCount }));
    }
  }, [initialCount]);

  const totalPrice = useMemo(
    () => priceForCount(Number(formData.treeCount || 0)),
    [formData.treeCount]
  );

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
      const res = await fetch("/api/olive-tree-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          treeCount: Number(formData.treeCount),
          totalPrice,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      } else {
        setStatus({
          type: "success",
          message:
            "Thank you. Your olive tree booking has been received. A confirmation email is on its way.",
        });
        setFormData({
          name: "",
          email: "",
          treeCount: initialCount,
          engravingNames: "",
          message: "",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please retry in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="olive-form-section space-top space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="title-area text-center mb-40">
              <span className="sub-title style1">Booking Form</span>
              <h2 className="sec-title">Confirm Your Olive Tree Booking</h2>
              <p className="sec-text">
                We will send a confirmation email with your booking details and next steps.
              </p>
            </div>
            <form className="olive-form card-plate" onSubmit={handleSubmit} noValidate>
              <div className="row g-4">
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
                <div className="col-md-6">
                  <label className="form-label">Number of Olive Trees</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    name="treeCount"
                    value={formData.treeCount}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <small className="form-hint">
                    Pricing auto-updates. Cards set quick presets.
                  </small>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Names to Engrave</label>
                  <input
                    type="text"
                    name="engravingNames"
                    value={formData.engravingNames}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. Amina &amp; Yusuf"
                  />
                  <small className="form-hint">
                    Use commas to add multiple names for grouped bookings.
                  </small>
                </div>
                <div className="col-12">
                  <label className="form-label">Optional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={3}
                    placeholder="Tell us who this is for or any special notes."
                  />
                </div>
              </div>

              <div className="olive-summary">
                <div>
                  <p className="summary-label">Selected</p>
                  <p className="summary-value">
                    {formData.treeCount} {Number(formData.treeCount) === 1 ? "tree" : "trees"}
                  </p>
                </div>
                <div>
                  <p className="summary-label">Total</p>
                  <p className="summary-value price">€{totalPrice.toLocaleString()}</p>
                </div>
              </div>

              <div className="text-center mt-30">
                <button type="submit" className="th-btn style1" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Booking"}
                </button>
                {status.message && (
                  <p
                    className={`form-status mt-3 ${
                      status.type === "error" ? "text-danger" : "text-success"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .olive-form-section {
          padding: 30px 0 90px;
          background: #fff9f3;
        }
        .olive-form .form-label {
          font-weight: 600;
          font-size: 14px;
        }
        .olive-form .form-control {
          background: #fff;
          border: 1px solid #d9e6e0;
          border-radius: 10px;
          min-height: 46px;
        }
        .olive-form textarea.form-control {
          min-height: 120px;
          resize: vertical;
        }
        .form-hint {
          display: block;
          margin-top: 6px;
          font-size: 12px;
          color: #6a746a;
        }
        .olive-summary {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 18px;
          border-radius: 14px;
          background: linear-gradient(135deg, #fdf4ec, #f7f1ec);
          border: 1px solid #edd9c9;
        }
        .summary-label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 11px;
          color: #6a5547;
          margin: 0;
        }
        .summary-value {
          margin: 2px 0 0;
          font-size: 18px;
          font-weight: 700;
        }
        .summary-value.price {
          color: var(--theme-color);
        }
        @media (max-width: 767px) {
          .olive-summary {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default OliveTreeBookingForm;

