"use client";
import React from 'react'
import Link from 'next/link'

function AboutOne() {
    return (
        <div
            className="about-area position-relative overflow-hidden space"
            style={{backgroundColor: "#FFF9F3"}}
            id="about-sec"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-box1">
                            <div className="img1">
                                <img src="/assets/img/Home/House of Andalus/1 Begin Your Stay 312x630.png" alt="About" />
                            </div>
                            <div className="img2">
                                <img src="/assets/img/Home/House of Andalus/2 Begin Your Stay 312x315.png" alt="About" />
                            </div>
                            <div className="img3">
                                <img src="/assets/img/Home/House of Andalus/3 Begin Your Stay 312x315.png" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                {/* <span className="sub-title style1 ">Reawaken Together</span> */}
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    Welcome to the House of Andalus
                                </h2>
                                <p className="">
                                    {/* Rediscover stillness and soul at The House of Andalus, where wellness, faith, and nature merge to restore peace, balance, and belonging. */}
                                 A sanctuary nestled in the sacred hills of Andalucía, House of Andalus is a living space of renewal, heritage, and leadership. Here, the land restores what we resist and what the word unravels. 


                                </p>
                                <p>
                                Our philosophy invites you to reconnect with purpose, reimagine leadership, and take part in reviving a legacy rooted in nature, knowledge, and community.
                            </p>
                            </div>
                            <div className="">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Sacred Retreat</h5>
                                        <p className="about-item_text">
                                           A sanctuary where hearts heal and spirits rise.
                                        </p>
                                    
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Spiritual & Professional Guidance</h5>
                                        <p className="about-item_text">
                                          Guided reflection for soulful discovery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-35">
                                <Link href="/the-house" className="th-btn style3 th-icon">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    style={{
                        top: "12%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "20%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{
                        top: "14%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{
                        bottom: "0%",
                        right: "-11%",
                    }}
                >
                    <img src="/Flowers-Purple-Curve-Transparent-Background.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-accent d-none d-xxl-block"
                    style={{
                        bottom: "48%",
                        right: "-16%",
                        color: "#8A7B5C",
                        fontSize: "26px",
                    }}
                >
                    <i className="fa-solid fa-leaf" aria-hidden="true" />
                </div>
                <div
                    className="shape-mockup about-crescent d-none d-xxl-block"
                    style={{
                        bottom: "22%",
                        right: "2%",
                        color: "#8A7B5C",
                        fontSize: "22px",
                    }}
                >
                    <i className="fa-solid fa-moon" aria-hidden="true" />
                </div>
            </div>
        </div>

    )
}

export default AboutOne
