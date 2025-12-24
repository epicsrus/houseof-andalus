"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import pic1 from '../../../public/assets/img/Book your stay/BuyOlive1.jpeg'
import pic2 from '../../../public/assets/img/Book your stay/BuyOlive2.jpeg'


const treeOptions = [
  { count: 1, price: 50, title: "Book 1 Olive Tree" },
  { count: 3, price: 125, title: "Book 3 Olive Trees" },
  { count: 5, price: 215, title: "Book 5 Olive Trees" },
  { count: 10, price: 450, title: "Book 10 Olive Trees" },
  { count: 25, price: 1150, title: "Book 25 Olive Trees" },
];

const OliveTreeBooking = () => {
  return (
    <div className="olive-wrapper">
      <section className="olive-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <span className="sub-title style1">Book an Olive Tree</span>
              <h2 className="sec-title">Plant Your Legacy With House of Andalus</h2>
              <p className="sec-text">
                Sponsor an olive tree that will be planted and cared for on your behalf.
                Each tree includes a handcrafted nameplate with the name you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="olive-story-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="story-card">
                <div className="story-header">
                  <div className="sliding-images">
                    <div className="image-wrapper slide-left">
                      <Image 
                        src={pic1} 
                        alt="Olive Tree 1" 
                        className="slide-image"
                        width={350}
                        height={350}
                      />
                    </div>
                    <div className="image-wrapper slide-right">
                      <Image 
                        src={pic2} 
                        alt="Olive Tree 2" 
                        className="slide-image"
                        width={350}
                        height={350}
                      />
                    </div>
                  </div>
                  <h3 className="story-title">The Olive Garden of Andalus</h3>
                  <div className="story-subtitle">Why the Olive Tree</div>
                </div>
                
                <div className="story-content">
                  <p>
                    In the timeless valleys of Andalusia—where endless olive trees reach toward heaven—the spirit of legacy whispers through every grove. Here, The House of Andalus stands as a living monument to serenity, sincerity, and sacred connection, born from a longing to restore what modern life has taken away. It envisions an Olive Garden of Renewal—a sanctuary of learning and giving that revives the art and spirituality of olive cultivation, the ancient symbol of peace, faith, and sustenance.
                  </p>
                  <p>
                    Each tree planted nourishes both land and soul, carrying forward the mission of wellness, knowledge, and community—the same values upon which Andalusia was built. Experience the extraordinary, restore the balance, and let your roots grow here in the Garden of Andalus—where faith meets earth, and giving becomes eternal.
                  </p>
                </div>

                <div className="decorative-divider">
                  <span>✦</span>
                  <span>✦</span>
                  <span>✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="olive-packages space-bottom">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-xl-8 text-center">
              <h3 className="section-heading">Choose Your Tree Package</h3>
              <p className="section-subtext">Select the number of olive trees you'd like to sponsor</p>
            </div>
          </div>
          
          <div className="row g-4">
            {treeOptions.map((option, index) => (
              <div className="col-md-6 col-lg-4" key={option.count}>
                <div className={`olive-card ${index === 2 ? 'featured' : ''}`}>
                  {index === 2 && <div className="featured-badge">Most Popular</div>}
                  
                  <div className="olive-card__header">
                    <div className="pill">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <circle cx="6" cy="6" r="5" opacity="0.3"/>
                        <circle cx="6" cy="6" r="2"/>
                      </svg>
                      Rounded base · ready to plant
                    </div>
                    <h3>{option.title}</h3>
                    <div className="price-container">
                      <span className="price">€{option.price.toLocaleString()}</span>
                      <span className="price-label">total</span>
                    </div>
                  </div>
                  
                  <div className="olive-card__body">
                    <p>
                      Book {option.count === 1 ? "one" : option.count} olive{" "}
                      {option.count === 1 ? "tree" : "trees"} that we will plant for you.
                      Includes a personalised nameplate and stewardship updates.
                    </p>
                    
                    <ul className="benefits-list">
                      <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="#8B7355" opacity="0.1"/>
                          <path d="M5 8L7 10L11 6" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Handcrafted nameplate
                      </li>
                      <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="#8B7355" opacity="0.1"/>
                          <path d="M5 8L7 10L11 6" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Annual updates
                      </li>
                      <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="#8B7355" opacity="0.1"/>
                          <path d="M5 8L7 10L11 6" stroke="#8B7355" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Lifetime care
                      </li>
                    </ul>
                  </div>
                  
                  <Link
                    className="th-btn style1 w-100 text-center book-btn"
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
          background: linear-gradient(180deg, #fff9f3 0%, #ffffff 100%);
        }

        .olive-hero {
          padding: 80px 0 60px;
          position: relative;
        }

        .olive-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: radial-gradient(circle at top center, rgba(189, 105, 56, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .sub-title {
          display: inline-block;
          color: #8B7355;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
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
          max-width: 700px;
          margin: 0 auto;
        }

        .olive-story-section {
          padding: 60px 0;
        }

        .story-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 50px 60px;
          box-shadow: 0 20px 60px rgba(38, 57, 37, 0.12);
          border: 1px solid rgba(139, 115, 85, 0.15);
          position: relative;
          overflow: hidden;
        }

        .story-card::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(189, 105, 56, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .story-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .sliding-images {
          margin: 2rem 0;
          display: flex;
          justify-content: center;
          gap: 4rem;
          min-height: 380px;
          align-items: center;
        }
        
        .image-wrapper {
          animation-duration: 1.2s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }
        
        .slide-image {
          width: 350px !important;
          height: 350px !important;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          display: block !important;
          transition: transform 0.3s ease;
        }
        
        .image-wrapper:hover .slide-image {
          transform: scale(1.05) rotate(5deg);
        }
        
        .slide-left {
          animation-name: slideFromLeft;
          animation-delay: 0s;
        }
        
        .slide-right {
          animation-name: slideFromRight;
          animation-delay: 0.6s;
        }
        
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-400px) rotate(-30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes slideFromRight {
          0% {
            transform: translateX(400px) rotate(30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }

        .story-title {
          font-size: 36px;
          color: #1f3127;
          margin: 16px 0 8px;
          font-weight: 700;
        }

        .story-subtitle {
          font-size: 16px;
          color: #8B7355;
          font-weight: 600;
          font-style: italic;
          letter-spacing: 1px;
        }

        .story-content {
          position: relative;
        }

        .story-content p {
          font-size: 17px;
          line-height: 1.9;
          color: #3c433c;
          margin-bottom: 24px;
          text-align: justify;
        }

        .story-content p:first-of-type::first-letter {
          font-size: 64px;
          line-height: 1;
          float: left;
          margin: 0 12px 0 0;
          color: #8B7355;
          font-weight: 700;
        }

        .decorative-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
          color: #8B7355;
          opacity: 0.4;
        }

        .decorative-divider span {
          font-size: 12px;
        }

        .olive-packages {
          padding: 60px 0 80px;
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
        }

        .olive-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 8px 30px rgba(38, 57, 37, 0.12);
          border: 2px solid #e5eee8;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
        }

        .olive-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(38, 57, 37, 0.2);
          border-color: #8B7355;
        }

        .olive-card.featured {
          border-color: #8B7355;
          box-shadow: 0 12px 40px rgba(139, 115, 85, 0.25);
        }

        .featured-badge {
          position: absolute;
          top: -12px;
          right: 28px;
          background: linear-gradient(135deg, #8B7355 0%, #bd6938 100%);
          color: white;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(139, 115, 85, 0.4);
        }

        .olive-card__header h3 {
          font-size: 22px;
          margin: 12px 0 16px;
          color: #1f3127;
          font-weight: 700;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(189, 105, 56, 0.1);
          color: #8B7355;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .price-container {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .price {
          font-size: 32px;
          font-weight: 700;
          color: #1f3127;
        }

        .price-label {
          font-size: 14px;
          color: #3c433c;
          font-weight: 500;
        }

        .olive-card__body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .olive-card__body p {
          color: #3c433c;
          line-height: 1.7;
          font-size: 15px;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #3c433c;
          font-size: 14px;
          font-weight: 500;
        }

        .book-btn {
          margin-top: auto;
          transition: all 0.3s ease;
        }

        .book-btn:hover {
          transform: scale(1.02);
        }

        @media (max-width: 991px) {
          .sec-title {
            font-size: 36px;
          }

          .story-card {
            padding: 40px 30px;
          }

          .story-title {
            font-size: 28px;
          }
        }

        @media (max-width: 767px) {
          .olive-hero {
            padding: 60px 0 40px;
          }

          .sec-title {
            font-size: 28px;
          }

          .sec-text {
            font-size: 16px;
          }

          .story-card {
            padding: 30px 20px;
          }

          .story-title {
            font-size: 24px;
          }

          .story-content p {
            font-size: 15px;
            text-align: left;
          }

          .olive-card {
            padding: 24px;
          }

          .section-heading {
            font-size: 26px;
          }
          
          .sliding-images {
            gap: 2rem;
            min-height: 280px;
            flex-direction: column;
          }
          
          .slide-image {
            width: 250px !important;
            height: 250px !important;
          }
          
          .slide-left {
            animation-delay: 0s;
          }
          
          .slide-right {
            animation-delay: 0.8s;
          }
        }
      `}</style>
    </div>
  );
};

export default OliveTreeBooking;