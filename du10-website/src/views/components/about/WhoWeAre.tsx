import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Styled from "./index.syle";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const IconPlayVideo = styled(Styled.ButtonPlayVideoWrapper)`
  z-index: 4;
  color: #db2f69;
  font-size: 44px;
  top: -5px;
  left: 2px;
`;

const banner = "/images/banner.png";

const WhoWeAre = (props: { onHandleModal(value: Boolean): void }) => {
  const onHandleClickModal = (): void => {
    props.onHandleModal(true);
  };

  return (
    <div className="container lg:flex gap-10">
      <div className="py-12 w-full lg:w-1/2">
        <h2 className="mb-9 text-[40px] font-bold text-[#454040]">
          <span className="text-highlight"> WHO WE ARE</span>
        </h2>
        <div className="lg:text-lg text-sm text-[#594e68] text-left">
          We are together with customers to create products that are valuable
          and meaningful to the community.
        </div>
        <div className="lg:text-lg text-sm text-[#594e68] text-left mt-6 lg:mt-10">
          <p>VMO is a flagship team in engineering and development.</p>
        </div>
        <div className="lg:text-lg text-sm text-[#594e68] text-left mt-6 lg:mt-10">
          <p>
            Our strength lies in understanding the client's business processes,
            culture, vision and goals across the industry segments and offering
            client oriented solutions which are highly reliable, ensuring
            adaptability to client needs, and thus bringing out the most
            innovative solutions in every business and technology domain.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center">
        <Styled.VideoWrapper onClick={onHandleClickModal}>
          <LazyLoadImage
            src={banner}
            alt="sample-images"
            className="w-100"
            width={900}
            height={368}
          />
          <Styled.ButtonPlayVideoWrapper>
            <div className="cursor-pointer">
              <Styled.ButtonPlayVideoWrapper>
                <Styled.ButtonPlayVideo />
              </Styled.ButtonPlayVideoWrapper>
              <IconPlayVideo>
                <CaretRightOutlined />
              </IconPlayVideo>
            </div>
          </Styled.ButtonPlayVideoWrapper>
        </Styled.VideoWrapper>
      </div>
    </div>
  );
};

export default WhoWeAre;
