import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className="">
      <div className="container">
        <div className="text-center px-3 mb-7 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            {/* <h5 className="uppercase text-[#454040] font-bold mb-4 text-left pl-20 relative before:content-[''] before:w-3 before:h-1 before:rounded-[5px] before:bg-[#dcdcdc] before:absolute before:top-3 before:left-0">
              About us
            </h5> */}
            <ul className="text-left mb-4 text-sm">
              <li>
                <NavLink to="/">CEO message</NavLink>
              </li>
              <li>
                <NavLink to="/">Company Profile</NavLink>
              </li>
              <li>
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/">News</NavLink>
              </li>
              <li>
                <NavLink to="/">Career</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            {/* <h5 className="uppercase text-[#454040] font-bold mb-4 text-left pl-20 relative before:content-[''] before:w-3 before:h-1 before:rounded-[5px] before:bg-[#dcdcdc] before:absolute before:top-3 before:left-0">
              Services
            </h5> */}
            <ul className="text-left mb-4 text-sm">
              <li>
                <NavLink to="/">DX Consulting</NavLink>
              </li>
              <li>
                <NavLink to="/">Contract Development</NavLink>
              </li>
              <li>
                <NavLink to="/">Offshore Development Center (ODC)</NavLink>
              </li>
              <li>
                <NavLink to="/">Blockchain and Web3</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            {/* <h5 className="uppercase text-[#454040] font-bold mb-4 text-left pl-20 relative before:content-[''] before:w-3 before:h-1 before:rounded-[5px] before:bg-[#dcdcdc] before:absolute before:top-3 before:left-0">
              Contact us
            </h5> */}
            <ul className="text-left mb-4 text-sm">
              <li className="flex">
                {/* <Address></Address> */}
                {/* <img
                  width={16}
                  height={16}
                  src={Address}
                  alt="React Logo"
                  className="mr-3 mb-auto mt-[14px]"
                /> */}
                <NavLink to="/">
                  Vietnam, Hanoi, Cau Giay Ward, Duy Tan 19, TTC Building, 11th
                  Floor
                </NavLink>
              </li>
              <li className="flex">
                {/* <img
                  width={16}
                  height={16}
                  src={Phone}
                  alt="React Logo"
                  className="mr-3 mb-auto mt-[14px]"
                /> */}
                <NavLink to="/">+84 (24) 3312-0103</NavLink>
              </li>
              <li className="flex">
                {/* <img
                  width={16}
                  height={16}
                  src={Website}
                  alt="React Logo"
                  className="mr-3 mb-auto mt-[10px]"
                /> */}
                <NavLink to="/">https://www.vmogroup.com</NavLink>
              </li>
              <li className="flex">
                {/* <img
                  width={16}
                  height={16}
                  src={Email}
                  alt="React Logo"
                  className="mr-3 mb-auto mt-[14px]"
                /> */}
                <NavLink to="/">info@vmogroup.com</NavLink>
              </li>
              <li className="flex">
                {/* <img
                  width={16}
                  height={16}
                  src={LinkedIn}
                  alt="React Logo"
                  className="mr-3 mb-auto mt-[14px]"
                /> */}
                <NavLink to="/">LinkedIn</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto text-center mb-9 m-4/5 md:w-3/4 text-[#db2f69] text-xs border border-[#db2f69]/40 rounded-[10px] px-4 py-[18px] relative before:content-['Lovely'] before:w-content before:h-content before:rounded-[5px] before:bg-[#f6f6f6] before:absolute before:-top-3 before:left-5 before:px-3 before:font-semibold before:text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sapiente
          molestiae, aut, nihil fugit beatae harum modi autem facilis eaque
          voluptatibus cumque quaerat et saepe excepturi! Quas placeat ad
          possimus?
        </div>
        <div className="text-center m-auto px-3 mb-4 text-xs">
          © 2023 VMO JSC. All rights reserved. Privacy Policy
        </div>
      </div>
    </footer>
  );
}
