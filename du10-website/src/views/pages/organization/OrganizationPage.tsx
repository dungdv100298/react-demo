import React, { Fragment } from "react";
import "./style.scss";

export default function OrganiztionPage() {
  const data = [
    {
      id: 1,
      name: "Trần Văn Mỹ",
      position: "DU Lead",
      supervisor_id: 0,
    },
    {
      id: 2,
      name: "Hoàng Hà Nam",
      position: "Technical Leader",
      supervisor_id: 1,
    },
    {
      id: 3,
      name: "Nguyễn Anh Tài",
      position: "PM Team Leader",
      supervisor_id: 1,
    },
    {
      id: 4,
      name: "Trần Thị Thu",
      position: "BrSE Team Leader",
      supervisor_id: 1,
    },
    {
      id: 5,
      name: "Hoàng Việt An",
      position: "Swimmer Team Leader",
      supervisor_id: 2,
    },
    {
      id: 6,
      name: "Hàn Văn Huy",
      position: "Toba Team Leader",
      supervisor_id: 2,
    },
    {
      id: 7,
      name: "Trần Quang Hiệp",
      position: "The Flash Team Leader",
      supervisor_id: 2,
    },
    {
      id: 8,
      name: "Vũ Đình Cường",
      position: "Spider Man Team Leader",
      supervisor_id: 2,
    },
    {
      id: 9,
      name: "Vũ Văn Doanh",
      position: "Thor Team Leader",
      supervisor_id: 2,
    },
    {
      id: 10,
      name: "Lê Văn Hội",
      position: "Wakanda Team Leader",
      supervisor_id: 2,
    },
    {
      id: 11,
      name: "Nguyễn Danh Lợi",
      position: "Infinity Leader",
      supervisor_id: 2,
    },
    // {
    //   id: 6,
    //   name: "Vũ Hoàng Bảo Trung",
    //   position: "Young Team Leader",
    //   supervisor_id: 2,
    // },
    // {
    //   id: 6,
    //   name: "Trần Hữu Tiến",
    //   position: "Mobile Leader",
    //   supervisor_id: 2,
    // },
    // {
    //   id: 6,
    //   name: "Nguyễn Văn Tiệp",
    //   position: "C++ Leader",
    //   supervisor_id: 2,
    // },
    // {
    //   id: 6,
    //   name: "Phùng Mạnh Cường",
    //   position: "DevOps Leader",
    //   supervisor_id: 2,
    // },
  ];

  const arrayToTree = (arr: any, supervisor_id = 0) =>
    arr
      .filter((item: any) => item.supervisor_id === supervisor_id)
      .map((child: any) => ({
        ...child,
        children: arrayToTree(arr, child.id),
      }));

  const dataConvert = arrayToTree(data);

  const Card = (props: any) => {
    return (
      <ul>
        {props.data.map((item: any, index: any) => (
          <Fragment key={item.name}>
            <li>
              <div className="card-org">
                <div className="image">
                  <img
                    src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                    alt="Profile"
                  />
                </div>
                <div className="card-body">
                  <div className="text-[#000] pt-4">{item.name}</div>
                </div>
                <div className="card-footer">{item.position}</div>
              </div>
              {item.children?.length > 0 && <Card data={item.children} />}
            </li>
          </Fragment>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-[#FFF] pt-[5vh] pb-[15vh]">
      <div className="text-center text-4xl font-bold text-[#cc313d] pb-[7vh] uppercase">
        Sơ Đồ Tổ Chức DU10
      </div>
      <div className="org-tree flex justify-center ">
        <Card data={dataConvert} />
      </div>
    </div>
  );
}
