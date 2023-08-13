import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { urlFor } from "../lib/client";
import Link from "next/link";

const MiniBanners = ({ miniBanner }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 8000, stopOnMouseEnter: true }),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-6 md:mt-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {miniBanner?.map((item, index) => (
            <div className="embla__mini-slide relative" key={index}>
              <img className="w-[85%]" src={urlFor(item.image).url()} alt="" />
              {/* <Link href={`/category/${slug.current}`}> */}
              <a target="_blank" href={item.linkTo}>
                <button>
                  <div className="absolute bottom-12 flex justify-center items-center font- w-[75%] h-12 bg-white left-4 right-0">
                    <h1>{item.title}</h1>
                  </div>
                </button>
              </a>
              {/* </Link> */}
            </div>
            /* <div key={index} className="embla__mini-slide">
              <a target="_blank" href={item.linkTo}>
                <img
                  className="rounded-xl"
                  src={urlFor(item.image).url()}
                  alt=""
                />
              </a>
            </div> */
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBanners;
