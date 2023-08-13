import React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { urlFor } from "../lib/client";

const BrandsCategory = ({ brand: { image, brandsName, slug } }) => {
  return (
    <div className="embla mt-6 md:mt-16">
      <Link href={`/brands/${slug.current}`}>
        {/* <div className="block group w-20 md:w-40 cursor-pointer">
          <img
            src={urlFor(image).url()}
            alt=""
            className="object-cover w-full rounded transition duration-500 group-hover:scale-105"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center">
              {brandsName}
            </h3>
          </div>
        </div> */}
        <div className="embla__mini-slide relative">
          <img className="w-[85%]" src={urlFor(image).url()} alt="" />
          {/* <Link href={`/category/${slug.current}`}> */}
          {/* <a target="_blank" href={item.linkTo}> */}
          <button>
            <div className="absolute bottom-12 flex justify-center items-center font- w-[75%] h-12 bg-white left-4 right-0">
              <h1>{brandsName}</h1>
            </div>
          </button>
          {/* </a> */}
          {/* </Link> */}
        </div>
      </Link>
    </div>
  );
};

export default BrandsCategory;
