import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/lib/carousel";

const slidesStyle: React.CSSProperties = {
  background: `url(https://vmojp-innovation.s3.ap-northeast-1.amazonaws.com/du10/IMG_2830.JPG) no-repeat rgb(71 71 93)`,
  backgroundPosition: "center",
  height: "calc(100vh - 90px)",
  backgroundSize: "cover",
};
const Slides: React.FC = () => {
  const ref = useRef<CarouselRef>(null);
  const handleNext = () => ref.current?.next();
  const handlePrev = () => ref.current?.prev();
  return (
    <div className="relative">
      <Button
        onClick={handlePrev}
        shape="circle"
        danger
        type="primary"
        size="large"
        className="items-center justify-center absolute left-8 top-1/2 z-50 hidden sm:flex"
      >
        <ArrowLeftOutlined className="mx-2" style={{ fontSize: "15px" }} />
      </Button>
      <Button
        onClick={handleNext}
        shape="circle"
        danger
        type="primary"
        size="large"
        className="items-center justify-center absolute right-8 top-1/2 z-50 hidden sm:flex"
      >
        <ArrowRightOutlined className="mx-2" style={{ fontSize: "15px" }} />
      </Button>
      <Carousel ref={ref} autoplay>
        <div>
          <div style={slidesStyle} className="flex justify-center items-center">
            <div className="flex items-center px-8">
              <div
                style={{
                  backdropFilter: "blur(10px)",
                }}
                className="p-8 lg:p-16 rounded-2xl text-center"
              >
                <h1 className="text-4xl xl:text-6xl font-bold text-white uppercase">
                  Do your best
                </h1>
                <h1 className="text-4xl xl:text-6xl font-bold text-white uppercase">
                  Make everything better
                </h1>
                {/* <h5 className="my-4 text-xl xl:text-2xl font-medium text-white">
                  With our trusted regulations and experience, you can easily &
                  safely build your investment assets
                </h5> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slides;

{
  /* <Carousel
ref={ref}
autoplay
className="text-center w-full"
style={{
  width: "100%",
  height: "calc(100vh - 120px)",
}}
>
<div className="flex justify-center items-center">
  <div className="flex items-center w-[60%] mx-auto">
    <div
      style={{
        backdropFilter: "blur(10px)",
      }}
      className="p-16 rounded-2xl"
    >
      <h1 className="text-4xl xl:text-6xl font-bold text-[#951e3d]">
        Anh em DU10 Đẳng cấp VIP pro
      </h1>
      <h5 className="my-4 text-xl xl:text-2xl font-medium text-[#5a5555]">
        With our trusted regulations and experience, you can easily &
        safely build your investment assets
      </h5>
    </div>
  </div>
</div>
</Carousel> */
}
