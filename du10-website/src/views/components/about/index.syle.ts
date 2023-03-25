import styled from "styled-components";

const Styled = {
  VideoWrapper: styled.div`
    position: relative;
    width: 900px;
    height: auto;
    ::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-image: linear-gradient(120deg, #f89f5f, #93c4f6);
      box-shadow: rgb(219 47 105 / 40%) 0px 7px 32px 0px;
      opacity: 0.6;
    }
  `,
  ButtonPlayVideoWrapper: styled.div`
    z-index: 3;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: absolute;
  `,
  ButtonPlayVideo: styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 0 0 #fff;
    animation: pulse-white 2s infinite;
  `,
};

export default Styled;
