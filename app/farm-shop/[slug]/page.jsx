import React from "react";
import { notFound } from "next/navigation";
import HeaderOne from "../../../src/Components/Header/HeaderOne";
import FooterFour from "../../../src/Components/Footer/FooterFour";
import ScrollToTop from "../../../src/Components/ScrollToTop";
import Breadcrumb from "../../../src/Components/BreadCrumb/Breadcrumb";
import FarmShopProduct from "../../../src/Components/FarmShop/FarmShopProduct";
import { farmShopProducts, findProduct } from "../../../src/Components/FarmShop/farmShopProducts";

export function generateStaticParams() {
  return farmShopProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  return product ? { title: `${product.name} | Farm Shop | House of Andalus` } : {};
}

export default async function FarmShopProductPage({ params }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Farm Shop" />
      <main>
        <FarmShopProduct slug={slug} />
      </main>
      <FooterFour />
      <ScrollToTop />
    </>
  );
}
