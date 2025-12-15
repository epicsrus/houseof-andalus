"use client";
import React from 'react'
import HeaderOne from '../../src/Components/Header/HeaderOne'
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb'
import Link from 'next/link'
import AboutFour from '../../src/Components/About/AboutFour'
import InvolvementSection from '../../src/Components/Engagement/InvolvementSection'
import OfferTwo from '../../src/Components/Offer/OfferTwo'
import ElementSection from '../../src/Components/Elements/ElementSection'
import TourOne from '../../src/Components/Tour/TourOne';
import TourGuideTwo from '../../src/Components/Guide/TourGuideTwo'
import TestimonialOne from '../../src/Components/Testimonials/TestimonialOne'
import BrandOne from '../../src/Components/Brand/BrandOne'
import GalleryFive from '../../src/Components/Gallery/GalleryFive'
import FooterOne from '../../src/Components/Footer/FooterOne'
import ScrollToTop from '../../src/Components/ScrollToTop'

function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Us"
            />
            <AboutFour />
            <InvolvementSection />
            {/* <OfferTwo /> */}
            
            {/* <TourOne/> */}
            {/* <ElementSection /> */}
            
            {/* <TourGuideTwo />
                <AboutFour />
                {/* <OfferTwo /> */}
            <FooterOne />

            <ScrollToTop />
        </>
    )
}

export default About
