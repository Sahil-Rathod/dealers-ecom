import React, { useState } from "react";

import { client } from "../../lib/client";
import { Footer, Product, RelatedProducts } from "../../components";

import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCarousel from "../../components/ProductDetailsCarousel";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../components/RichTextComponent";

// import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";

const ProductDetails = ({ product, products, infoData, categories }) => {
  const { image, colors, size, name, description, listPrice, discountedPrice } =
    product;
  const dispatch = useDispatch();

  const notify = () => {
    toast.success(`Added ${name} to your cart!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [count, setCount] = useState(1);

  return (
    <div>
      <Header product={products} info={infoData} categories={categories} />
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={image} />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                {name}
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">{name}</div>

              {/* PRODUCT PRICE */}
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#8377;{discountedPrice}
                </p>
                {listPrice && (
                  <>
                    <p className="text-base  font-medium line-through">
                      &#8377;{listPrice}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {Math.round(
                        ((listPrice - discountedPrice) / listPrice) * 100
                      )}
                      % off
                    </p>
                  </>
                )}
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-4">
                {`(Also includes all applicable duties)`}
              </div>

              {/* Product Quantity */}
              <div class="mb-16 flex mt-6 items-center pb-5 border-b-2 border-gray-100">
                <label class="mr-2 text-lg font-semibold" for="count">
                  Quantity:
                </label>
                <div class="flex items-center mt-1">
                  <button
                    onClick={() => {
                      setCount(Math.max(count - 1, 1));
                    }}
                    className="  text-lg font-medium transition-transform active:scale-95  hover:opacity-75"
                  >
                    <svg
                      className="h-9 w-9"
                      fill="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <span className="text-gray-900 text-2xl mx-2 font-semibold">
                    {count}
                  </span>
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    class="text-gray-500 focus:outline-none focus:text-gray-600"
                  >
                    <svg
                      className="h-9 w-9"
                      fill="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3 text-lg font-semibold">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {size.map((size) => (
                        <option>{size}</option>
                      ))}
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex ml-6 items-center">
                    {/* {console.log(colors)} */}
                    <span class="mr-3 text-lg font-semibold">Colors</span>
                    <div class="relative">
                      {/* <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"> */}
                      {/* {colors.map((color) => (
                          <option>{color}</option>
                        ))} */}
                      <div class="flex">
                        {colors.map((color) => (
                          <button
                            class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADD TO CART BUTTON START */}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  dispatch(
                    addToCart({
                      item: {
                        ...product,
                        count,
                      },
                    })
                  );
                  notify();
                }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button> */}
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    value={description}
                    // components={RichTextComponent}
                  />
                </div>
              </div>
            </div>
            {/* right column end */}
          </div>

          <RelatedProducts products={products} />
        </Wrapper>
      </div>

      <Footer info={infoData} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const category = product.category;

  const products = await client.fetch(productsQuery);

  const infoData = await client.fetch(`*[_type=="info"]`);

  const categoryQuery = '*[_type == "category"]';
  const categories = await client.fetch(categoryQuery);

  return {
    props: { products, product, infoData, categories },
  };
};

export default ProductDetails;
