import React, { useMemo, useState } from "react";
import { Link } from "react-scroll";
import "./progress.scss";

interface ProgressProps {
  items: Array<any>;
  parentCallback: any;
}

export const ProgressBar = ({ items, parentCallback }: ProgressProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const ProgressItems = useMemo(() => {
    const item = items.map((el, index) => {
      function handleSetActive() {
        parentCallback(el.id);
        setActiveItem(el.id);
      }
      return (
        <Link
          id={el.id}
          activeClass={`${el.classActive}`}
          className={el.className}
          to={el.to}
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={50}
          duration={700}
          onSetActive={handleSetActive}
          ignoreCancelEvents={false}
          isDynamic={true}
          delay={700}
          key={index}
        >
          {el.name}
        </Link>
      );
    });
    return item;
  }, [items]);
  return (
    <div className="relative pt-8 pb-10 container">
      <div className="flex w-full items-center">
        <div className="diamond bg-[#db2f69] w-2 h-2"></div>
        <hr className="border border-[#db2f69]/40 w-full"></hr>
        <div className="diamond bg-[#db2f69] w-2 h-2"></div>
      </div>

      <div className="grid grid-cols-5 relative">
        {ProgressItems.map(function (element, index) {
          return (
            <div className="flex justify-center" key={index}>
              <div className="diamond border border-[#db2f69] bg-[#FEF8FB] w-3 h-3 absolute -top-2.5">
                <p className="opacity-0">{element}</p>
              </div>
              <div
                className={`diamond border border-[#db2f69] bg-[#db2f69] w-3 h-3 absolute -top-4 ${
                  element.props.id === activeItem ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="opacity-0">{element}</p>
              </div>
              <p className="text-sm absolute top-1 text-[#9b9b9b]">{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
