import React, { useState } from "react";
import Slides from "@components/Slides";
import { Col, Row } from "antd";
import SlideNews from "@components/slide-news";
import News from "@components/news/index";
import OurCustomers from "@components/our-customers";
import WhoWeAre from "@components/about/WhoWeAre";
import VideoModal from "@components/modal/Video";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HomePage() {
  const [openModal, setOpenModal] = useState<Boolean>(false);

  const onHandleModal = (value: Boolean) => {
    setOpenModal(value);
  };

  const onHandleCancel = (value: Boolean) => {
    setOpenModal(value);
  };

  return (
    <section>
      <section className="z-10">
        <Slides></Slides>
      </section>
      <section className="relative z-20 py-4 bg-[#FEF8FB]">
        <div className="container">
          <Row className="mt-24">
            <Col sm={6} xs={24} className="text-center my-4">
              <h1 className="text-4xl font-bold">
                100 <span className="text-[#d63384]">+</span>
              </h1>
              <p>Member</p>
            </Col>
            <Col sm={6} xs={24} className="text-center my-4">
              <h1 className="text-4xl font-bold">
                183,092 <span className="text-[#d63384]">+</span>
              </h1>
              <p>Projects</p>
            </Col>
            <Col sm={6} xs={24} className="text-center my-4">
              <h1 className="text-4xl font-bold">
                183,092 <span className="text-[#d63384]">+</span>
              </h1>
              <p>Years of experriece</p>
            </Col>
            <Col sm={6} xs={24} className="text-center my-4">
              <h1 className="text-4xl font-bold">
                183,092 <span className="text-[#d63384]">+</span>
              </h1>
              <p>Daily trades</p>
            </Col>
          </Row>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="items-center mt-24"
          >
            <Col
              sm={8}
              xs={24}
              className="text-center flex flex-col items-center py-8 my-4"
            >
              <div className="p-4 rounded-full bg-[#fae4ec] my-2">
                <img
                  src="/images/in-avo-2-icon-3.png"
                  width={32}
                  height={32}
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold my-2">
                Application Development
              </h2>
              <p className="my-2">
                Leveraging software applications to drive business growth, we
                provide a full process from planning to design implementation,
                development and operation.
              </p>
            </Col>
            <Col
              sm={8}
              xs={24}
              className="text-center flex flex-col items-center rounded-2xl  shadow-xl shadow-[#d71e5f45] py-8 my-4"
              style={{
                background: `linear-gradient(148deg, rgb(219, 47, 105) 0%, rgba(219, 47, 105, 0.5) 86%)`,
              }}
            >
              <div className="p-4 rounded-full bg-[#fae4ec] my-2">
                <img
                  src="/images/in-avo-2-icon-2.png"
                  width={32}
                  height={32}
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold my-2 text-white">
                Maintenance & Support
              </h2>
              <p className="my-2 text-white">
                We leverage our end-to-end application development, maintenance,
                and management services and solutions that deliver measurable
                business value.
              </p>
            </Col>
            <Col
              sm={8}
              xs={24}
              className="text-center flex flex-col items-center py-8 my-4"
            >
              <div className="p-4 rounded-full bg-[#fae4ec] my-2">
                <img
                  src="/images/in-avo-2-icon-3.png"
                  width={32}
                  height={32}
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold my-2">Cloud Computing</h2>
              <p className="my-2">
                With years of experience in building and operating with AWS, we
                confidently propose and build the appropriate and optimized
                enviroment for customers.
              </p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="bg-[#FEF8FB]">
        <WhoWeAre onHandleModal={onHandleModal} />
        <VideoModal openModal={openModal} onHandleCancel={onHandleCancel} />
      </section>
      <section className=" bg-[#FEF8FB] relative pt-32 pb-32">
        <div className="container">
          <SlideNews className={{ width: "500px" }} />
          <div className="mt-32 grid md:grid-cols-3 grid-rows-4 gap-4">
            <LazyLoadImage
              src={"/images/img2.JPG"}
              alt="Image Alt"
              className="md:row-span-3 object-cover  min-h-[400px] md:min-h-[140px] rounded-2xl h-full"
            />
            <LazyLoadImage
              src={"/images/img3.jpg"}
              alt="Image Alt"
              className="md:row-span-2 min-h-[400px] md:min-h-[140px] rounded-2xl"
            />
            <LazyLoadImage
              src={"/images/img7.jpeg"}
              alt="Image Alt"
              className="row-span-1 min-h-[400px] md:min-h-[140px] rounded-2xl"
            />
            <LazyLoadImage
              src={"/images/img4.jpg"}
              alt="Image Alt"
              className="md:row-span-3 min-h-[400px]  md:min-h-[140px] rounded-2xl"
            />
            <LazyLoadImage
              src={"/images/img5.jpg"}
              alt="Image Alt"
              className="md:row-span-2 min-h-[400px]  md:min-h-[140px] rounded-2xl"
            />
            <LazyLoadImage
              src={"/images/img6.jpeg"}
              alt="Image Alt"
              className="row-span-1 min-h-[400px] md:min-h-[140px] rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section className="relative wrapper-our_customers">
        <div className="w-full bg-[#c976a729]">
          <OurCustomers />
        </div>
      </section>
    </section>
  );
}
