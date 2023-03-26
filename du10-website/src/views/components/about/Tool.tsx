import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

interface ToolProps {
  item: {
    title: string;
    position: boolean;
    description: string;
    image: string;
    id: string;
  };
}

export const Tool = ({ item }: ToolProps) => {
  return (
    <div className="container flex justify-center items-center h-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20">
        <div
          className={
            item.position ? "flex justify-end" : "flex justify-start xl:hidden"
          }
        >
          <img
            src={item.image}
            alt="logo"
            className="w-2/3 lg:w-1/2 xl:w-full"
          />
        </div>
        <div className={`py-10 ${!item.position ? "pl-20" : "pr-20"}`}>
          <h1
            className={`text-4xl font-serif mb-12 flex ${
              !item.position ? "justify-end xl:justify-start" : "justify-start"
            }`}
          >
            {item.title}
          </h1>
          <p
            className={`mb-12 ${
              !item.position ? "text-end xl:text-start" : "text-start"
            }`}
          >
            {item.description}
          </p>
          <div
            className={`flex ${
              !item.position ? "justify-end xl:justify-start" : "justify-start"
            }`}
          >
            <button className="xl:ml-5 bg-[#db2f69]/80 py-3 px-5 w-fit flex justify-center items-center rounded-3xl text-[#eee] flex-none cursor-pointer">
              Try for free
              <ArrowRightOutlined className="ml-3" />
            </button>
          </div>
        </div>
        <div
          className={`justify-start ${
            !item.position ? "xl:flex hidden" : "hidden"
          }`}
        >
          <img src={item.image} alt="logo" className="w-2/3 lg:1/2 xl:w-full" />
        </div>
      </div>
    </div>
  );
};
