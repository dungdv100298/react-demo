import { useState, CSSProperties } from "react";
import Styled from "./index.style";

const contentStyle: CSSProperties = {
  marginBottom: "100px",
  backgroundColor: "#fffcfd",
  margin: "0 auto",
};

export interface ISlideProps {
  className: CSSProperties;
}

const Slide = (props: ISlideProps) => {
  const [dataSlide] = useState([
    {
      text1: "“DU10 is my first choice for invest”",
      text2:
        "I have learned a lot from my first day at work. The brothers in DU10 were very enthusiastic to help me.",
      text3: "Tran Tien Thanh",
      text4: "Front-end Developer",
      style: contentStyle,
    },
    {
      text1: "“DU10 is my first choice for invest”",
      text2:
        "I am very proud to work in a dynamic and creative environment. Working at DU10 has a lot of opportunities to learn and develop yourself.",
      text3: "Nguyen Danh Loi",
      text4: "Team leader",
      style: contentStyle,
    },
  ]);

  return (
    <div className="mx-auto my-0 max-w-[787px] relative">
      <img
        src=""
        alt=""
        className="turn absolute -left-4 -top-10 hidden md:block"
      />
      <img
        src="/images/in-avo-4-decor-3.svg"
        alt=""
        className="turn absolute -right-20 top-10 hidden md:block"
      />
      <img
        src="/images/in-avo-4-decor-1.svg"
        alt=""
        className="turn absolute -left-20 top-40 hidden md:block"
      />
      <Styled.CarouselWrapper autoplay>
        {dataSlide.map((item) => (
          <div
            style={item.style}
            key={item.text1}
            className="h-auto pt-[60px] px-[50px] bg-white rounded-[15px]"
          >
            <div className="text-[32px] font-bold flex justify-center text-[#454040] mb-9">
              {item.text1}
            </div>
            <div className="text-[20px] font-light flex justify-center text-[#9b9b9b] mb-4">
              {item.text2}
            </div>
            <div className="text-[16px] font-bold flex justify-center text-[#b72053] mt-5">
              {item.text3}
            </div>
            <div className="text-[16px] font-normal flex justify-center text-[#9b9b9b] mb-4">
              {item.text4}
            </div>
          </div>
        ))}
      </Styled.CarouselWrapper>
    </div>
  );
};

export default Slide;
