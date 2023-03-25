import styled from "styled-components";
import { Carousel } from "antd";

const Style = {
  CarouselWrapper: styled(Carousel)`
    background-color: white;
    ::after {
      content: "";
      width: 96%;
      height: 10px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background: #fafafa;
      box-shadow: 0px -10px 12px -2px rgb(0 0 0 / 3%);
      position: absolute;
      top: -10px;
      left: 2%;
    }
    .slick-slider {
      border-radius: 20px;
    }
    > .slick-list {
      padding-bottom: 50px;
      box-shadow: 0px -10px 12px -2px rgb(0 0 0 / 5%);
    }
    > .slick-list .slick-track {
      margin-bottom: 50px;
      height: auto;
    }
    > .slick-dots-bottom {
      bottom: 90px;
    }
    > .slick-dots li button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #dcdcdc;
      margin-bottom: 20px;
    }
    > .slick-dots li.slick-active button {
      width: 15px;
      height: 10px;
      border-radius: 35%;
      background: #db2f69;
    }
  `,
};

export default Style;
