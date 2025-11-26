"use client";
import React from 'react'
import Link from 'next/link'

function GetInTouch() {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Get In Touch</span>
                    <h2 className="sec-title">Our Contact Information</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid style2">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/location-dot2.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Our Address</h6>
                                <p className="about-contact-details-text">
                                    Andalucia, Spain x7792 street
                                </p>
                                {/* <p className="about-contact-details-text">Road, New York, Canada</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/call.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Phone Number</h6>
                                <p className="about-contact-details-text">
                                    <a href="tel:01234567890"> +34 000 000 000</a>
                                </p>
                                {/* <p className="about-contact-details-text">
                                    <a href="tel:01234567890">+09 876 543 210</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/mail.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Email Address</h6>
                                <p className="about-contact-details-text">
                                    <a href="mailto:info@houseofandalus.com">info@houseofandalus.com</a>
                                </p>
                                {/* <p className="about-contact-details-text">
                                    <a href="mailto:support24@tourm.com">support24@tourm.com</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch
