import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export interface ImagesProps {
  image: string[];
}

const OurCustomers = () => {
  const [image] = useState<string[]>([
    "https://vmogroup.jp/_nuxt/img/ricoh.ee42c35.png",
    "https://vmogroup.jp/_nuxt/img/prestige.167935d.png",
    "https://vmogroup.jp/_nuxt/img/marubeni.dc7be8a.png",
    "https://vmogroup.jp/_nuxt/img/hashpeak.3a56394.png",
    "https://vmogroup.jp/_nuxt/img/ridgelinez.0258ae6.png",
    "https://vmogroup.jp/_nuxt/img/yokogawa.9c48bee.png",
    "https://vmogroup.jp/_nuxt/img/lux.9f89f46.png",
    "https://vmogroup.jp/_nuxt/img/yamato-group.b3624c1.png",
    "https://vmogroup.jp/_nuxt/img/tanaka.d6b817d.png",
    "https://vmogroup.jp/_nuxt/img/xels.2b46fd6.png",
    "https://vmogroup.jp/_nuxt/img/paktor.e71aa45.png",
    "https://vmogroup.jp/_nuxt/img/photobook.58d065d.png",
    "https://vmogroup.jp/_nuxt/img/bicycle.8647d25.jpg",
    "https://vmogroup.jp/_nuxt/img/comuni.05e2ddb.jpg",
    "https://vmogroup.jp/_nuxt/img/aimee.f7ca2e7.svg",
    "https://vmogroup.jp/_nuxt/img/mobio.8738156.png",
    "https://vmogroup.jp/_nuxt/img/optix.fa07332.png",
    "https://vmogroup.jp/_nuxt/img/expert.ee600e5.png",
    "https://vmogroup.jp/_nuxt/img/power.ba527ff.png",
    "https://vmogroup.jp/_nuxt/img/betterhome.4df0716.png",
  ]);

  return (
    <div className="container z-30">
      <div className="text-center w-full relative">
        <div className="lg:py-12 py-10">
          <p className="mb-6 font-bold text-[rgba(20,0,57,1)] uppercase text-[34px]">
            Our customers
          </p>
          <div className="lg:text-xl text-sm font-normal color_content">
            <p>
              We are supporting customers from Startups to Fortune 500 companies
              in 40+ countries
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center container w-full relative z-20">
        <div className="grid lg:grid-cols-5 grid-cols-6 gap-2 lg:gap-3 mb-20 w-full p-4 md:p-[50px]">
          {image &&
            image.map((item, index) => (
              <div
                className="flex justify-center items-center h-[160px] col-span-3 md:col-span-2 lg:col-span-1 bg-white cursor-pointer"
                key={index}
              >
                <LazyLoadImage
                  src={item}
                  alt={"logo-" + index + 1}
                  className="w-4/5"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
