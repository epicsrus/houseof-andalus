"use client";
import React from "react";
import HeaderOne from "../../src/Components/Header/HeaderOne";
import FooterFour from "../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../src/Components/ScrollToTop";
import Breadcrumb from "../../src/Components/BreadCrumb/Breadcrumb";
import OliveTreeBooking from "../../src/Components/OliveTree/OliveTreeBooking";

export default function BookAndOliveTreePage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Book & Olive Tree" />
      <main>
        <OliveTreeBooking />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

