"use client";
import React from "react";
import Link from "next/link";

const treeOptions = [
  { count: 1, price: 50, title: "Book 1 Olive Tree" },
  { count: 2, price: 95, title: "Book 2 Olive Trees" },
  { count: 3, price: 135, title: "Book 3 Olive Trees" },
  { count: 4, price: 170, title: "Book 4 Olive Trees" },
  { count: 5, price: 200, title: "Book 5 Olive Trees" },
];

const OliveTreeBooking = () => {
  return (
    <div className="olive-wrapper">
      <section className="olive-hero space-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <span className="sub-title style1">Book &amp; Olive Tree</span>
              <h2 className="sec-title">Plant Your Legacy With House of Andalus</h2>
              <p className="sec-text">
                Sponsor an olive tree that will be planted and cared for on your behalf.
                Each tree includes a handcrafted nameplate with the name you choose.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-40">
            {treeOptions.map((option) => (
              <div className="col-md-6 col-lg-4" key={option.count}>
                <div className="olive-card">
                  <div className="olive-card__header">
                    <div className="pill">Rounded base · ready to plant</div>
                    <h3>{option.title}</h3>
                    <p className="price">€{option.price.toLocaleString()} total</p>
                  </div>
                  <p className="olive-card__body">
                    Book {option.count === 1 ? "one" : option.count} olive{" "}
                    {option.count === 1 ? "tree" : "trees"} that we will plant for you.
                    Includes a personalised nameplate and stewardship updates.
                  </p>
                  <Link
                    className="th-btn style1 w-100 text-center"
                    href={`/book-and-olive-tree/form?count=${option.count}`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .olive-wrapper {
          background: #fff9f3;
        }
        .olive-hero {
          padding: 70px 0 10px;
        }
        .olive-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 22px 22px 18px;
          box-shadow: 0 16px 38px -18px rgba(38, 57, 37, 0.32);
          border: 1px solid #e5eee8;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.2s ease;
        }
        .olive-card__header h3 {
          font-size: 20px;
          margin: 8px 0 2px;
        }
        .olive-card__body {
          flex: 1;
          color: #3c433c;
          line-height: 1.6;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(189, 105, 56, 0.1);
          color: var(--theme-color);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.04em;
        }
        .price {
          font-size: 24px;
          font-weight: 700;
          color: #1f3127;
        }
        @media (max-width: 767px) {
          .olive-card {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default OliveTreeBooking;

