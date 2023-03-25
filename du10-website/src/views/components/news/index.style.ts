import styled from "styled-components";
import { Carousel } from "antd";

const Style = {
  CarouselWrapper: styled(Carousel)`
    height: 100%;
    .slick-slider {
      height: 100%;
    }
    > .slick-list {
      height: 100%;
    }
    > .slick-list .slick-track {
      height: 100%;
    }
    > .slick-list .slick-track .slick-slide {
      height: 100%;
    }
    > .slick-list .slick-track .slick-slide div:not(.content) {
      height: 100%;
    }
  `,
};

export default Style;
