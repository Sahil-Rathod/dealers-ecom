import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Category = ({ category: { image, categoryName, slug } }) => {
  return (
    <>
      <Link href={`/category/${slug.current}`}>
        <div className="relative  flex justify-center items-center w-[300px]">
          <img className="w-auto bg-cover" src={urlFor(image).url()} alt="" />
          <button>
            <div className="absolute bottom-6 flex justify-center items-center font- w-[90%] h-12 bg-white left-4 right-0">
              <h1>{categoryName}</h1>
            </div>
          </button>
        </div>
      </Link>
    </>
  );
};

export default Category;
