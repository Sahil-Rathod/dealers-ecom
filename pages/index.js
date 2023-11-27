import React from "react";

import { client } from "../lib/client";
import {
  Product,
  HeroBanner,
  BrandsCategory,
  Category,
  Footer,
} from "../components";
import MiniBanners from "../components/MiniBanners";
import LogoSlider from "../components/LogoSlider";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import { RiWhatsappFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Home = ({
  miniBannerData,
  bannerData,
  productData,
  featureProductsData,
  categories,
  brands,
  brands2,
  brandData,
  infoData,
}) => (
  <div>
    {/* {console.log(brands)}
    {console.log(miniBannerData)} */}
    <Header product={productData} info={infoData} categories={categories} />

    <HeroBanner heroBanner={bannerData} />
    <MiniBanners miniBanner={miniBannerData} />
    {/* <LogoSlider logoSlider={brands2} /> */}

    {/* Categories  */}

    <div className="w-full max-w-[1280px] mx-auto">
      <div className="text-center pb-8 max-w-[800px] mx-auto my-[10px] md:my-[40px]">
        <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight">
          Shop by categories
        </h2>
      </div>

      <div className="flex flex-wrap gap-5  items-center justify-center">
        {categories?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>

    {/*Brands Categories  */}

    {/* <div
      id="brands"
      className="w-full max-w-[1280px] pt-20 px-5 md:px-10 mx-auto"
    >
      <div className="text-center max-w-[800px] pb-8 mx-auto my-[10px] md:my-[40px]">
        <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight">
          Shop by Brands
        </h2>
      </div>

      <div className="flex flex-wrap md:px-0 items-center justify-center">
        {brands?.map((brand) => (
          // <h1>{brand.name}</h1>
          <BrandsCategory key={brand._id} brand={brand} />
        ))}
      </div>
    </div> */}
    {/* Featured Products */}

    <div className="w-full max-w-[1280px] mt-40 px-5 md:px-10 mx-auto">
      <div className="text-center max-w-[800px] mx-auto my-[30px] md:my-[80px]">
        <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight">
          Our Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14 px-5 md:px-0">
        {featureProductsData?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

    <LogoSlider logoSlider={brands} logoSlider2={brands2} />

    {/* CountUp */}

    <Counter />
    {/* Brand Data */}
    {/* <div className="w-full  px-5 md:px-10 mx-auto">
      <div className="text-center max-w-[800px] mx-auto mb-[10px] mt-[30px] md:mb-[30px] md:mt-[60px]">
        <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight">
          Brands We Work With
        </h2>
      </div>
      <Brands brands={brandData} />
      {console.log(brandData)}
    </div> */}
    <Footer info={infoData} />
    <a target="_blank" href={`https://wa.me/91${infoData[0]?.phoneNo}?`}>
      <IconContext.Provider value={{ color: "green" }}>
        <RiWhatsappFill alt="whataspp" className="whatsAppButton" />
      </IconContext.Provider>
    </a>
  </div>
);

export const getServerSideProps = async () => {
  const featureProducts = `*[_type == "product" && featureProduct == true]`;
  const featureProductsData = await client.fetch(featureProducts);

  const categoryQuery = '*[_type == "category"]';
  const categories = await client.fetch(categoryQuery);

  const brandsQuery = '*[_type == "brands"]';
  const brands = await client.fetch(brandsQuery);

  const brands2Query = '*[_type == "brands2"]';
  const brands2 = await client.fetch(brands2Query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const miniBannerQuery = '*[_type == "miniBanner"]';
  const miniBannerData = await client.fetch(miniBannerQuery);

  const productData = await client.fetch(`*[_type == 'product']`);
  const brandData = await client.fetch(`*[_type=='brand']`);

  const infoData = await client.fetch(`*[_type=="info"]`);

  return {
    props: {
      categories,
      brands,
      brands2,
      miniBannerData,
      featureProductsData,
      bannerData,
      productData,
      brandData,
      infoData,
    },
  };
};

export default Home;
