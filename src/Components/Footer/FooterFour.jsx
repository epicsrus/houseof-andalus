"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../Gallery/Modal';

function FooterFour() {
    const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalImage, setModalImage] = useState('');
    
        // Function to open the modal with the selected image
        const openModal = (imageSrc, event) => {
            event.preventDefault(); // Prevent default link behavior
            setModalImage(imageSrc);
            setIsModalOpen(true);
        };
    
        // Function to close the modal
        const closeModal = () => {
            setIsModalOpen(false);
        };
    return (
        <footer className="footer-wrapper bg-title footer-layout2 shape-mockup-wrap">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-white text-capitalize mb-0">
                                        get updated the latest newsletter
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form style2">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="Enter Email"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style1">
                                            Subscribe Now <img src="/assets/img/icon/plane2.svg" alt="" />
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
                                            <img src="/assets/img/white-newlogo.png" alt="house-of-andalus" width={100} />
                                        </Link>
                                    </div>
                                    <p className="about-text">
                                        Beautifully weave Andalusian heritage with global vision. Purposefully create sanctuaries for reflection and growth.
                                    </p>
                                    <div className="th-social">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram" />
                                        </a>
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
                                <h3 className="widget_title">Get In Touch</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <a href="tel:+34 000 000 000" className="info-box_link">
                                                    +34 000 000 000
                                                </a>
                                            </p>
                                            {/* <p>
                                                <a href="tel:+09876543210" className="info-box_link">
                                                    +09 876 543 210
                                                </a>
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <a
                                                    href="mailto:info@houseofandalus.com"
                                                    className="info-box_link"
                                                >
                                                    info@houseofandalus.com
                                                </a>
                                            </p>
                                            {/* <p>
                                                <a
                                                    href="mailto:support24@tourm.com"
                                                    className="info-box_link"
                                                >
                                                    support24@tourm.com
                                                </a>
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
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 1.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 1.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 1.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 2.png"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 2.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 2.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 2.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 3.png"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 3.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 3.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 3.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 4.png"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 4.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 4.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 4.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 5.png"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 5.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 5.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 5.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/Gallery2/Home 6.png"
                                            alt="Gallery"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 6.png', e)}
                                        />
                                        <a
                                            href="/assets/img/Gallery2/Home 6.png"
                                            className="gallery-btn popup-image"
                                            onClick={(e) => openModal('/assets/img/Gallery2/Home 6.png', e)}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
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
            <div
                className="shape-mockup movingX d-none d-xxl-block"
                style={{ top: '24%', left: '5%' }}
            >
                <img src="/assets/img/shape/shape_8.png" alt="shape" />
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </footer>

    )
}

export default FooterFour
