"use client";
import React from 'react'
import Link from 'next/link'

function FooterOne() {
    return (
        <footer className="  footer-layout1">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-capitalize mb-0">
                                        get updated the latest newsletter
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="Enter Email"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style3 th-icon">
                                            Subscribe Now 
                                            {/* <img src="/assets/img/icon/plane.svg" alt="" /> */}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link href="/">
                                            <img src="/assets/img/brown-newlogo.png" alt="Tourm" width={100}  />
                                        </Link>
                                    </div>
                                    <p className="about-text">
                                        Beautifully weave Andalusian heritage with global vision. Purposefully create sanctuaries for reflection and growth.
                                    </p>
                                    <div className="th-social">
                                        <Link href="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="https://www.twitter.com/">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                        <Link href="https://www.whatsapp.com/">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link href="https://instagram.com/">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About us</Link>
                                        </li>
                                        <li>
                                            <Link href="/the-house">The House</Link>
                                        </li>
                                        <li>
                                            <Link href="/book-your-stay">Book your Stay</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Address</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link href="tel:+34 000 000 000" className="info-box_link">
                                                    +34 000 000 000
                                                </Link>
                                            </p>
                                            {/* <p>
                                                <Link href="tel:+09876543210" className="info-box_link">
                                                    +09 876 543 210
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link
                                                    href="mailto:info@houseofandalus.com"
                                                    className="info-box_link"
                                                >
                                                    info@houseofandalus.com
                                                </Link>
                                            </p>
                                            {/* <p>
                                                <Link
                                                    href="mailto:support24@tourm.com"
                                                    className="info-box_link"
                                                >
                                                    support24@tourm.com
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>Andalucia, Spain x7792 street</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Post</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 1.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 2.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 3.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 4.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 5.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 6.png"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            href="https://www.instagram.com/"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="copyright-wrap background-image"
                // style={{ backgroundImage: "url('/assets/img/home/copyright_bg_1.jpg')" }}
            >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                Copyright 2025 <Link href="/">House of Andalus</Link>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                                <span className="title">We Accept</span>
                                <img src="/assets/img/shape/cards.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default FooterOne
