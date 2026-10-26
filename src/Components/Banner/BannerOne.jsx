"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Modal from 'react-modal';
function useModalAccessibility(){
    useEffect(() => {
        const appElem = document.getElementById('__next') || document.body;
        if (appElem) Modal.setAppElement(appElem);
    }, []);
}

function BannerOne() {
        const swiperRef = useRef(null);
        useModalAccessibility();
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const videoRef = useRef(null);

    useEffect(() => {
        // Function to add animation classes
        const animationProperties = () => {
            document.querySelectorAll('[data-ani]').forEach((element) => {
                const animationName = element.getAttribute('data-ani');
                element.classList.add(animationName);
            });

            document.querySelectorAll('[data-ani-delay]').forEach((element) => {
                const delayTime = element.getAttribute('data-ani-delay');
                element.style.animationDelay = delayTime;
            });
        };

        animationProperties();
    }, []);

    // Event handler for custom navigation arrows
    const handleSliderNavigation = (direction) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (direction === "prev") {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    };

        // Auto play / pause video when modal toggles
        useEffect(() => {
            if (modalIsOpen && videoRef.current) {
                const v = videoRef.current;
                const attempt = v.play();
                if (attempt && typeof attempt.then === 'function') {
                    attempt.catch(() => { v.muted = true; v.play().catch(()=>{}); });
                }
            } else if (!modalIsOpen && videoRef.current) {
                videoRef.current.pause();
            }
        }, [modalIsOpen]);

        return (
                <div className="th-hero-wrapper hero-1" id="hero">

            <Swiper
                modules={[Navigation, Pagination, EffectFade]} // Initialize necessary modules
                effect="fade" // Use fade effect
                loop={true} // Enable loop
                speed={1000}
                pagination={{
                    el: ".swiper-pagination", // Custom pagination container
                    clickable: true, // Enable clickable pagination
                }}
                navigation={{
                    nextEl: ".slider-next", // Custom next button
                    prevEl: ".slider-prev", // Custom prev button
                }}
                className="th-slider hero-slider-1"
                id="heroSlide1"
            >
                <div className="swiper-wrapper">
                    {/* <SwiperSlide>
                        <div className="hero-inner">
                            <div className="th-hero-bg" aria-label="House of Andalus introduction background">
                                <video
                                    className="hero-video"
                                    src="/assets/img/house-of-andalus-final.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(55%) saturate(95%) contrast(105%)',
                                        boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)'
                                    }}
                                />
                            </div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                        Reconnect your spirit with Andalus
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                        Restore Legacy of Al-Andalus{" "}
                                    </h1>
                                    <div
                                        className="btn-group"
                                        data-ani="slideinup"
                                        data-ani-delay="0.6s"
                                    >
                                        <button type="button" onClick={()=>setModalIsOpen(true)} className="th-btn th-icon">
                                            Book Retreats
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <div className="hero-inner">
                            <div className="th-hero-bg" aria-label="House of Andalus introduction background">
                                <video
                                    className="hero-video"
                                    src="/assets/img/house-of-andalus-final.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(55%) saturate(95%) contrast(105%)',
                                        boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)'
                                    }}
                                />
                            </div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                        Welcome to the House of Andalus
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                        Rediscover peace and purpose here{" "}
                                    </h1>



                                    
                                    <div
                                            className="hero-cta-inline"
                                            data-ani="slideinup"
                                            data-ani-delay="0.6s"
                                    >
                                        
                                        <div className='video-box1 left-margin'>
                                            <span className="watch-label">Click to Watch →</span>
                                        <button className="play-btn style2 popup-video" onClick={() => setModalIsOpen(true)} aria-label="Play introduction video">
                                            <i className="fa-sharp fa-solid fa-play" />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="hero-inner">
                            <div className="th-hero-bg" aria-label="House of Andalus introduction background">
                                <video
                                    className="hero-video"
                                    src="/assets/img/house-of-andalus-final.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(55%) saturate(95%) contrast(105%)',
                                        boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)'
                                    }}
                                />
                            </div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                        Reconnect your spirit with Andalus
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                        Reconnect within House of Andalus{" "}
                                    </h1>
                                    <div
                                        className="btn-group"
                                        data-ani="slideinup"
                                        data-ani-delay="0.6s"
                                    >
                                        <button type="button" onClick={()=>setModalIsOpen(true)} className="th-btn th-icon">
                                            Book Retreats
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                                </div>
                        <style jsx>{`
                            .hero-cta-inline { display:inline-flex; align-items:center; gap:14px; margin-top:14px; }
                            .hero-cta-inline .play-btn { position:relative; }
                            .watch-label { font-size:14px; font-weight:600; letter-spacing:.03em; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.4); }
                            @media (max-width: 767px){ .hero-cta-inline { margin-top:18px; gap:10px; } .watch-label { font-size:13px; } }
                        `}</style>
                {/* <div className="th-swiper-custom">
                    <button
                        className="slider-arrow slider-prev"
                        onClick={() => handleSliderNavigation("prev")}
                    >
                        <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
                    </button>
                    <div className="swiper-pagination" />
                    <button
                        className="slider-arrow slider-next"
                        onClick={() => handleSliderNavigation("next")}
                    >
                        <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
                    </button>
                </div> */}
            </Swiper>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={()=>setModalIsOpen(false)}
                            contentLabel="Retreat Video"
                            className="video-modal large"
                            overlayClassName="video-modal-overlay"
                            style={{
                                content:{
                                    maxWidth:'1100px', width:'100%', inset:'50% auto auto 50%', transform:'translate(-50%, -50%)', background:'#000', borderRadius:'14px'
                                }
                            }}
                        >
                            <button className="close-btn" onClick={()=>setModalIsOpen(false)}>&times;</button>
                            <video
                                ref={videoRef}
                                width="100%"
                                height="700"
                                autoPlay
                                controls
                                playsInline
                                poster=""
                                aria-label="Retreat Introduction Video"
                                style={{ borderRadius:'10px', boxShadow:'0 6px 30px rgba(106,104,104,0.4)' }}
                            >
                                <source src="/assets/img/house-of-andalus-final.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Modal>
                </div>

    )
}

export default BannerOne
