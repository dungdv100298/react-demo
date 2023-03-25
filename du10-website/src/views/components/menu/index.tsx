import { DownOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface MenuProps {
  items: Array<any>;
  className?: string;
  clickMenu(value: {}): void;
}

export const Menu = ({ items, className, clickMenu }: MenuProps) => {
  const menuItems = useMemo(() => {
    const itemsArr = items.map((menu) => {
      return (
        <li
          key={menu.key}
          className="font-bold text-base text-[#000] mr-[8%]"
          onClick={() => clickMenu(menu)}
        >
          <Link
            className={`nav-item relative ${
              menu.isActive &&
              "active text-[#db2f69] hover:text-[#db2f69] hover:opacity-100"
            }`}
            to={menu.url}
          >
            <div
              className={`nav-item-label flex items-center ${
                !menu.isActive && "hover:opacity-75"
              }`}
            >
              {menu.label}
              {menu.children && <DownOutlined className="ml-2 text-[12px]" />}
            </div>
            {menu.children && (
              <div
                className={`menu-children absolute flex flex-col w-fit bg-white p-4 rounded-lg`}
              >
                {menu.children?.map((item: any, index: any) => {
                  return (
                    <Link
                      className={`menu-children-item w-fit px-2 py-1 text-[#000] hover:text-[#db2f69]`}
                      key={index}
                      to={item.url}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </Link>
        </li>
      );
    });

    return itemsArr;
  }, [items, clickMenu]);

  return <ul className={`${className} flex justify-center`}>{menuItems}</ul>;
};
