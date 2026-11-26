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
  if (!product) return {};
  const title = `${product.name} | Farm Shop | House of Andalus`;
  const image = product.image || "/assets/img/og/farm-shop.jpg";
  return {
    title,
    description: product.description,
    openGraph: {
      type: "website",
      siteName: "House of Andalus",
      title,
      description: product.description,
      url: `/farm-shop/${product.slug}`,
      images: [{ url: image, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description: product.description, images: [image] },
  };
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
