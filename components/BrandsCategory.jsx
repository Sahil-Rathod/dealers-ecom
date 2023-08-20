import React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { urlFor } from "../lib/client";

const BrandsCategory = ({ brand: { image, brandsName, slug } }) => {
  return (
    // <div className="embla mt-6 md:mt-16">
    //   <Link href={`/brands/${slug.current}`}>
    //     <div className="embla__mini-slide relative">
    //       <img className="w-[85%]" src={urlFor(image).url()} alt="" />
    //       {/* <Link href={`/category/${slug.current}`}> */}
    //       {/* <a target="_blank" href={item.linkTo}> */}
    //       <button>
    //         <div className="absolute bottom-12 flex justify-center items-center font- w-[75%] h-12 bg-white left-4 right-0">
    //           <h1>{brandsName}</h1>
    //         </div>
    //       </button>
    //       {/* </a> */}
    //       {/* </Link> */}
    //     </div>
    //   </Link>
    // </div>
    <div className="">
      <div className="flex flex-col flex-wrap items-center pb-10">
        <Link href={`/brands/${slug.current}`}>
          <div className="w-40 h-40 mb-3 cursor-pointer rounded-full shadow-2xl flex justify-center items-center">
            <img
              class="w-[50%] h-[30%] "
              src={urlFor(image).url()}
              alt="Bonnie image"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BrandsCategory;
