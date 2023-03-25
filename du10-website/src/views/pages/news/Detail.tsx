import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { news } from "@utils/news";
interface INew {
  id: Number;
  title: string;
  createDate: string;
  image: string;
  avartar: string;
  name: string;
  tag: string;
  description: string;
  content: string;
}

export default function NewDetail() {
  const params = useParams();
  const [newDetail, setData] = useState<INew>({
    id: 0,
    title: "",
    createDate: "",
    image: "",
    avartar: "",
    name: "",
    tag: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    let data = news.find((item) => Number(item.id) === Number(params.id)) || {
      id: 0,
      title: "",
      createDate: "",
      image: "",
      avartar: "",
      name: "",
      tag: "",
      description: "",
      content: "",
    };
    setData(data);
  }, []);
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
        <div className="bg-[#FEF8FB]">
          <div className="container py-16">
            <Row gutter={32}>
              <Col>
                <div className="flex flex-col bg-white w-full border rounded-lg overflow-hidden">
                  <div className="p-16">
                    <div className="mt-4 flex items-center">
                      <img
                        src="/images/author-85z9UC.jpg"
                        alt=""
                        className="w-[32px] h-[32px] rounded-full"
                      />
                      <span className="ml-4">Warren Wong</span>
                      <span className="mx-2 text-2xl">•</span>
                      <span className="">December 29, 2022</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#454040] my-6">
                      {newDetail.title}
                    </h3>
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{
                        __html: newDetail.content,
                      }}
                    ></div>
                  </div>
                  <div className="border-t p-16">
                    <span className="font-bold">Tags:</span>
                    <span className="mx-2">
                      <a href="/">virus</a>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
