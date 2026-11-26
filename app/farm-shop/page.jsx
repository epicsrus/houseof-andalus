"use client";
import React from "react";
import HeaderOne from "../../src/Components/Header/HeaderOne";
import FooterFour from "../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../src/Components/ScrollToTop";
import Breadcrumb from "../../src/Components/BreadCrumb/Breadcrumb";
import FarmShop from "../../src/Components/FarmShop/FarmShop";

export default function FarmShopPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Farm Shop" />
      <main>
        <FarmShop />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
