import React, { useState, useRef } from "react";
import { CarouselRef } from "antd/lib/carousel";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Styled from "./index.style";

const imageLeft = "./images/sakura4.png";
const imageRight = "./images/sakura5.png";

const News = () => {
  const [newses] = useState([
    {
      id: Math.random(),
      title: 'VMO JAPAN PARTICIPATES IN "HANEDA WEB3.0 EXPO 2023"!',
      description:
        'Before taking a look at blockchain for supply chain, it is important to first understand how blockchain works. This article will be shorter than the article "Blockchain Basics (1) What is Blockchain" which explains in detail how blockchain works.',
      image:
        "https://vmo112.vmo.group/uploads/1671448226895Image_20221208_152520_972.jpeg",
      created_at: "December 29, 2022",
    },
    {
      id: Math.random(),
      title: "BLOCKCHAIN BASICS (5) BLOCKCHAIN & MEDICAL",
      description:
        'Before taking a look at blockchain for supply chain, it is important to first understand how blockchain works. This article will be shorter than the article "Blockchain Basics (1) What is Blockchain" which explains in detail how blockchain works.',
      image:
        "https://vmo112.vmo.group/uploads/1672042381681Image_20221210_210921_325.jpeg",
      created_at: "December 29, 2022",
    },
    {
      id: Math.random(),
      title: "The need for medical innovation with blockchain",
      description:
        'Before taking a look at blockchain for supply chain, it is important to first understand how blockchain works. This article will be shorter than the article "Blockchain Basics (1) What is Blockchain" which explains in detail how blockchain works.',
      image:
        "https://vmo112.vmo.group/uploads/1672459493408Happy%20New%20Year.jpg",
      created_at: "December 29, 2022",
    },
    {
      id: Math.random(),
      title: "The need for medical innovation with blockchain",
      description:
        'Before taking a look at blockchain for supply chain, it is important to first understand how blockchain works. This article will be shorter than the article "Blockchain Basics (1) What is Blockchain" which explains in detail how blockchain works.',
      image:
        "https://vmo112.vmo.group/uploads/1672459493408Happy%20New%20Year.jpg",
      created_at: "December 29, 2022",
    },
  ]);
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);

  const slider = useRef<CarouselRef>(null);
  const nextSlide = () => {
    if (slider.current) {
      slider.current.next();
    }
  };

  const prevSlide = () => {
    if (slider.current) {
      slider.current.prev();
    }
  };

  const afterChangeSlide = (currentIndex: React.SetStateAction<number>) => {
    setCurrentIndexSlide(currentIndex);
  };

  return (
    <div className="relative">
      <img
        src={imageLeft}
        alt=""
        className="absolute top-1/4 left-[-20px] w-[350px] h-auto hidden 2xl:block"
      />
      <img
        src={imageRight}
        alt=""
        className="absolute top-1/4 right-0 w-[350px] h-auto hidden 2xl:block"
      />
      <div className="news container my-10">
        <div className="block lg:flex gap-5 h-min">
          <div className="relative w-full lg:w-1/2">
            <button
              onClick={prevSlide}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white hover:bg-orange-500 hover:text-white z-[1] text-xs shadow-xl"
            >
              <LeftOutlined />
            </button>
            <Styled.CarouselWrapper
              ref={slider}
              dots={false}
              autoplay
              className="relative h-full"
              afterChange={afterChangeSlide}
            >
              {newses.map((news) => (
                <div
                  key={news.id}
                  className="relative rounded-lg overflow-hidden"
                >
                  <img
                    src={news.image}
                    alt=""
                    className="w-full h-full rounded-lg object-cover"
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-40" />
                  <div className="content absolute left-5 right-5 bottom-3 text-white">
                    <Link
                      to="/"
                      title={news.title}
                      className="text-xl font-semibold line-clamp-2 leading-5 text-white hover:text-orange-500 hover:underline"
                    >
                      {news.title}
                    </Link>
                    <p className="line-clamp-3 mt-3 mb-2 leading-4">
                      {news.description}
                    </p>
                    <div className="flex items-center">
                      <CalendarOutlined className="mr-2" />
                      <span>{news.created_at}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Styled.CarouselWrapper>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white hover:bg-orange-500 hover:text-white z-[1] text-xs shadow-xl"
            >
              <RightOutlined />
            </button>
          </div>
          <div className="w-full lg:w-1/2 h-min mt-5 lg:mt-0">
            {newses.map((news, index) => (
              <div
                key={news.id}
                className={`flex gap-2 mb-3 last:mb-0 bg-white rounded-md overflow-hidden
                ${currentIndexSlide === index && "shadow-lg"}
              `}
              >
                <img
                  src={news.image}
                  alt=""
                  className="w-1/3 sm:w-1/4 flex-shrink-0 object-cover"
                />
                <div className="flex-1 px-2 xl:px-3 py-2 xl:py-4">
                  <Link
                    to="/"
                    title={news.title}
                    className="text-sm sm:text-base font-semibold transition-all text-[#454040] hover:text-orange-500 block leading-4 mb-1 hover:underline"
                  >
                    {news.title}
                  </Link>
                  <p className="line-clamp-2 xl:line-clamp-3 mb-2 text-xs sm:text-bas">
                    {news.description}
                  </p>
                  <div className="flex items-center text-[12px] sm:text-xs mt-auto text-gray-400">
                    <CalendarOutlined className="mr-2" />
                    <span>{news.created_at}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
