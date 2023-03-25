import React from "react";
import { Col, Row } from "antd";
import {
  ArrowRightOutlined,
  SearchOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { news, category } from "@utils/news";
import { Link } from "react-router-dom";
export default function NewsPage() {
  return (
    <div>
      <div className="bg-white">
        <div className="container text-center py-16 ">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold text-[#951e3d]">News</h1>
            <div className="py-2 px-4 text-white bg-[#db2f69ba] inline-block rounded-2xl mt-4">
              <a href="/">Home</a>
              <span className="mx-2 text-sm">&gt;&gt;</span>
              <a href="/">News</a>
            </div>
            <img
              src="/images/in-avo-4-decor-2.svg"
              alt=""
              className="turn absolute -left-1 md:-left-32 -top-8 md:block"
            />
            <img
              src="/images/in-avo-4-decor-3.svg"
              alt=""
              className="turn absolute -right-32 top-1 md:block"
            />
            <img
              src="/images/in-avo-4-decor-1.svg"
              alt=""
              className="turn absolute -left-28 md:-left-40 top-10 md:block"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FEF8FB]">
        <div className="container py-16">
          <Row gutter={32}>
            <Col xs={24} md={18}>
              <div className="flex flex-col">
                {news.map((item, index) => (
                  <div
                    className="w-full bg-white border rounded-lg overflow-hidden mb-14"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-full  max-h-[327px]  mr-2 object-cover"
                      style={{
                        minHeight: "222px",
                      }}
                    />
                    <div className="p-4 border-t">
                      <Link
                        to={"/news/" + item.id}
                        className="text-2xl font-bold text-[#454040]"
                      >
                        {item.title}
                      </Link>
                      <p className="">{item.description}</p>
                      <div className="mt-4 flex items-center">
                        <img
                          src="/images/author-85z9UC.jpg"
                          alt=""
                          className="w-[32px] h-[32px] rounded-full"
                        />
                        <span className="ml-4">{item.name}</span>
                        <span className="mx-2 text-2xl">•</span>
                        <span className="">{item.createDate}</span>
                      </div>
                    </div>
                    <div className="p-4 border-t flex justify-between items-center">
                      <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-xl">
                        {item.tag}
                      </span>
                      <Link
                        to={"/news/" + item.id}
                        className="text-[#951e3d] font-bold flex items-center"
                      >
                        Read more
                        <ArrowRightOutlined
                          className="mx-2"
                          style={{ fontSize: "15px" }}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="w-full flex items-center justify-center mt-16">
                <li className="w-[40px] h-[40px] text-center mx-2 shadow-lg rounded-lg text-white bg-[#DB2F69]">
                  1
                </li>
                <li className="w-[40px] h-[40px] text-center mx-2 shadow-lg rounded-lg border">
                  2
                </li>
                <li className="w-[40px] h-[40px] text-center mx-2 shadow-lg rounded-lg border">
                  3
                </li>
                <li className="w-[40px] h-[40px] text-center mx-2 shadow-lg rounded-lg border">
                  4
                </li>
                <li className="w-[40px] h-[40px] text-center mx-2 shadow-lg rounded-lg border">
                  »
                </li>
              </ul>
            </Col>
            <Col xs={24} md={6}>
              <div className="w-full flex rounded-lg border overflow-hidden">
                <input
                  type="text"
                  className="w-full outline-none py-2 px-4"
                  placeholder="Search here..."
                />
                <button className="bg-[#DB2F69] w-[50px] h-[50px] text-white font-bold">
                  <SearchOutlined />
                </button>
              </div>
              <div className="mt-8 p-4 bg-white rounded-xl border">
                <h3 className="text-xl font-bold text-[#454040]">Categories</h3>
                {category.map((item, index) => (
                  <Link
                    to="/"
                    className="flex justify-between mt-4"
                    key={index}
                  >
                    <span>{item.name}</span>
                    <span className="bg-[#efc6db] py-1 px-2 rounded text-[#951e3d]">
                      {item.total}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white rounded-xl border">
                <h3 className="text-xl font-bold text-[#454040]">
                  Latest News
                </h3>
                {news.map((item, index) => (
                  <div className="border-b pb-4" key={index}>
                    <Link to="/" className="flex justify-between mt-4">
                      <span>{item.title}</span>
                    </Link>
                    <div className="flex items-center">
                      <ClockCircleOutlined className="mr-2" />
                      {item.createDate}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
