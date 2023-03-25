import React, { useState } from "react";
import { ProgressBar } from "@components/about/ProgressBar";
import { Tool } from "@components/about/Tool";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./style.scss";

export default function AboutUsPage() {
  const constItemsProgress = [
    {
      id: 0,
      classActive: "active_progress",
      className: "",
      name: "Introduction",
      to: "section-0",
    },
    {
      id: 1,
      classActive: "active_progress",
      className: "",
      name: "BOT dạy học tiếng anh - ChatGPT",
      to: "section-1",
    },
    {
      id: 2,
      classActive: "active_progress",
      className: "",
      name: "VMOJP Confession",
      to: "section-2",
    },
    {
      id: 3,
      classActive: "active_progress",
      className: "",
      name: "VMOJP CheckIn",
      to: "section-3",
    },
    {
      id: 4,
      classActive: "active_progress",
      className: "",
      name: "VMOJP Reminder",
      to: "section-4",
    },
    {
      id: 5,
      classActive: "active_progress",
      className: "",
      name: "VMO Library",
      to: "section-5",
    },
    {
      id: 6,
      classActive: "active_progress",
      className: "",
      name: "VMO Device Management",
      to: "section-6",
    },
    {
      id: 7,
      classActive: "active_progress",
      className: "",
      name: "VMO Vote",
      to: "section-7",
    },
    {
      id: 8,
      classActive: "active_progress",
      className: "",
      name: "VMOJP Forum",
      to: "section-8",
    },
  ];

  const tools = [
    {
      title: "BOT dạy học tiếng anh - ChatGPT",
      position: true,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-1.svg",
      id: "section-1",
    },
    {
      title: "VMOJP Confession",
      position: false,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-2.svg",
      id: "section-2",
    },
    {
      title: "VMOJP CheckIn",
      position: true,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-1.svg",
      id: "section-3",
    },
    {
      title: "VMOJP Reminder",
      position: false,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-2.svg",
      id: "section-4",
    },
    {
      title: "VMO Library",
      position: true,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-1.svg",
      id: "section-5",
    },
    {
      title: "VMO Device Management",
      position: false,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-2.svg",
      id: "section-6",
    },
    {
      title: "VMO Vote",
      position: true,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-1.svg",
      id: "section-7",
    },
    {
      title: "VMOJP Forum",
      position: false,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt eligendi alias perferendis optio atque reprehenderit aspernatur ea inventore quo reiciendis provident, earum autem excepturi ad quas nam illo maxime.",
      image: "/images/in-avo-tool-2.svg",
      id: "section-8",
    },
  ];

  const style: React.CSSProperties = {
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
  };

  const [itemsProgress, setItemsProgress] = useState(
    constItemsProgress.slice(0, 5),
  );

  const handleProgress = (childData: any) => {
    const val = childData % 5;

    if (childData > constItemsProgress.length - 5) {
      setItemsProgress(
        constItemsProgress.slice(
          constItemsProgress.length - 5,
          constItemsProgress.length,
        ),
      );
    } else if (val === 4) {
      setItemsProgress(constItemsProgress.slice(childData - 1, childData + 4));
    } else {
      setItemsProgress(
        constItemsProgress.slice(childData - val, childData - val + 5),
      );
    }
  };

  return (
    <div className="relative">
      <div className="inset-0 transition duration-[.75s] ease-in-out fixed">
        <div className="sticky inset-0 h-screen">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              background: `url(/images/bg-wave-1.png)`,
              backgroundSize: "cover",
              backgroundPosition: "0% 0%",
            }}
          ></div>
          <img
            className="w-1/3 xl:w-1/4 m-auto absolute top-1/4 -left-[100px] hidden xl:block"
            src="/images/cherry-tree-1.gif"
            alt="animated-cat-image-0184"
          />
        </div>
      </div>

      <div className="relative z-10">
        <section
          id="section-0"
          style={style}
          className="!bg-no-repeat pt-[150px] flex justify-center items-center"
        >
          <div className="w-2/3 h-auto lg:w-1/2 2xl:h-2/3 bg-gradient-to-br from-[#db2f69] to-[#db2f69]/40 rounded-2xl p-8 relative">
            <div className="border border-[#fff]/40 w-full h-full p-8">
              <div className="h-auto lg:h-1/2 flex justify-center items-center">
                <p className="text-[32px] lg:text-[50px] xl:text-[65px] font-bold text-center font-serif text-title">
                  Explore Our Tools
                </p>
              </div>
              <div className="flex w-2/3 h-auto justify-center items-center m-auto">
                <div className="diamond bg-[#eee] w-2 h-2"></div>
                <hr className="border border-[#eee]/40 w-full"></hr>
                <div className="diamond bg-[#eee] w-2 h-2"></div>
              </div>
              {/* <div className="mt-5 w-3/4 grid grid-cols-3 gap-4"></div> */}
              <div className="mt-10 text-center text-[#eee] relative">
                <p>Chào mừng bạn khám phá những công cụ của chúng tôi.</p>
                <div className="absolute left-1/2 !-translate-x-1/2 w-12 h-12 flex items-center justify-center animate-ping">
                  <DoubleRightOutlined className="rotate-90" />
                </div>
                <img
                  className="w-1/2 lg:w-1/3 2xl:w-1/4 m-auto absolute hidden xl:block"
                  src="/images/animated-cat-image.gif"
                  alt="animated-cat-image-0184"
                />
              </div>
            </div>
            <div className="diamond bg-[#fff] w-2 h-2 absolute top-7 left-7"></div>
            <div className="diamond bg-[#fff] w-2 h-2 absolute top-7 right-7"></div>
            <div className="diamond bg-[#fff] w-2 h-2 absolute bottom-7 left-7"></div>
            <div className="diamond bg-[#fff] w-2 h-2 absolute bottom-7 right-7"></div>
          </div>
        </section>

        {tools.map(function (element, i) {
          return (
            <section
              id={element.id}
              key={i}
              style={style}
              className="!bg-no-repeat pt-[150px]"
            >
              <Tool item={element}></Tool>
            </section>
          );
        })}
        <div className="sticky inset-x-0 bottom-0 z-1 bg-[#FEF8FB] hidden lg:flex">
          <ProgressBar
            items={itemsProgress}
            parentCallback={handleProgress}
          ></ProgressBar>
        </div>
      </div>
    </div>
  );
}
