import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with
         streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kit
         e experience seamlessly on your Android and iOS devices."
        imageUrl="media/images/products-coin.png"
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        imageUrl="media/images/products-console.png"
      />
      <LeftSection
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        imageUrl="media/images/productsKite.png"
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        imageUrl="media/images/products-kiteconnect.png"
      />
      <LeftSection
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imageUrl="media/images/varsity-products.png"
      />
      <Universe/>
    </>
  );
}

export default ProductPage;
