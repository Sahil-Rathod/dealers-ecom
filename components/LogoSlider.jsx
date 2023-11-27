import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { urlFor } from "../lib/client";
import Link from "next/link";

const LogoSlider = ({ logoSlider, logoSlider2 }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 1000, stopOnMouseEnter: false }),
    WheelGesturesPlugin(),
  ]);
  const [emblaRef2] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 1000, stopOnMouseEnter: false }),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-16 md:mt-16">
      <div
        id="brands"
        className="text-center max-w-[800px] pb-8 mx-auto my-[10px] md:my-[40px]"
      >
        <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight">
          Our Brands
        </h2>
      </div>
      <div className="embla__viewport mt-16" ref={emblaRef}>
        <div className="embla__container">
          {logoSlider?.map((item, index) => (
            <div className=" mr-12 relative" key={index}>
              <div className="flex flex-col flex-wrap items-center pb-10">
                {/* <Link href={`/brands/${slug.current}`}> */}
                <div className="w-48 h-48 mb-3 cursor-pointer rounded-full shadow-2xl flex justify-center items-center">
                  <img
                    class="w-[40%] h-[40%]"
                    src={urlFor(item.image).url()}
                    alt="Bonnie image"
                  />
                </div>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="embla__viewport mt-8" ref={emblaRef2}>
        <div className="embla__container">
          {logoSlider?.map((item, index) => (
            <div className=" mr-12 relative" key={index}>
              <div className="flex flex-col flex-wrap items-center pb-10">
                <div className="w-48 h-48 mb-3 cursor-pointer rounded-full shadow-2xl flex justify-center items-center">
                  <img
                    class="w-[40%] h-[40%]"
                    src={urlFor(item.image).url()}
                    alt="Bonnie image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default LogoSlider;
