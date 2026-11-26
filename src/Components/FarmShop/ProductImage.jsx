"use client";
import React from "react";

// Shows the product photo, or a branded placeholder until the photo is ready.
const ProductImage = ({ product, large = false }) => {
  const isOil = product.category === "olive-oil";

  return (
    <div className={`product-image ${large ? "large" : ""}`}>
      {product.image ? (
        <img src={product.image} alt={`${product.name} ${product.size}`} />
      ) : (
        <div className={`placeholder ${isOil ? "oil" : "cosmetic"}`} aria-label={`${product.name}: photo coming soon`}>
          <svg width={large ? 72 : 48} height={large ? 72 : 48} viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 6c-6 8-10 14-10 20a10 10 0 0 0 20 0c0-6-4-12-10-20Z" fill="currentColor" opacity="0.18" />
            <path d="M24 6c-6 8-10 14-10 20a10 10 0 0 0 20 0c0-6-4-12-10-20Z" stroke="currentColor" strokeWidth="2" />
            <path d="M24 42V30M24 34l-5-4M24 32l5-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="placeholder-format">{product.format}</span>
          <span className="placeholder-note">Photo coming after harvest</span>
        </div>
      )}
      <style jsx>{`
        .product-image {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: #f7f1ec;
        }
        .product-image.large {
          aspect-ratio: 1 / 1;
          border-radius: 24px;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
          padding: 16px;
          color: #8b7355;
        }
        .placeholder.oil {
          background: radial-gradient(circle at 30% 20%, #fdf6e3 0%, #f1e6cf 55%, #e6d7b8 100%);
        }
        .placeholder.cosmetic {
          background: radial-gradient(circle at 30% 20%, #fdf9f5 0%, #f3e8df 55%, #e8d9cc 100%);
        }
        .placeholder-format {
          font-weight: 700;
          font-size: 16px;
          color: #1f3127;
        }
        .placeholder-note {
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default ProductImage;
