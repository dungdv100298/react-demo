import { Button } from "antd";
import { staffs } from "@utils/staffs";

export default function StudyPage() {
  return (
    <div>
      <div className="bg-white">
        <div className="container text-center py-16 ">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold text-[#951e3d]">Study</h1>
            <div className="py-2 px-4 text-white bg-[#db2f69ba] inline-block rounded-2xl mt-4">
              <a href="/">Home</a>
              <span className="mx-2 text-sm">&gt;&gt;</span>
              <a href="/">Study</a>
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
            <div className="rounded-2xl shadow-xl overflow-hidden w-full">
              <div className="w-full p-8 bg-[#db2f6942] flex justify-between">
                <div className="flex items-center">
                  <img src="/images/trophy.png" className="w-[40px] mr-4" />
                  <span className="text-[#951e3d] text-2xl">
                    Excellent staff
                  </span>
                </div>
                <div className="">
                  <Button
                    type="text"
                    shape="circle"
                    className="font-bold text-[#951e3d] text-xl"
                  >
                    Study score
                  </Button>
                  <span className="font-bold text-[#951e3d] text-xl mx-2">
                    /
                  </span>
                  <Button
                    type="text"
                    shape="circle"
                    className=" text-gray-500 text-xl"
                  >
                    Training score
                  </Button>
                </div>
              </div>
              {staffs.map((item, index) => (
                <div
                  className={`flex items-center justify-between p-8 border-b-[#db2f691a] ${
                    index % 2 === 0 && "bg-[#fdf2f6]"
                  }`}
                  key={index}
                >
                  <div className="flex items-center">
                    <img src="/images/profile.png" className="w-[40px] mr-4" />
                    <span className="text-xl">{item.name}</span>
                  </div>
                  <span className="text-green-500 text-xl font-bold">
                    {item.score}
                  </span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
