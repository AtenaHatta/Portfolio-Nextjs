// React icons with  "icon name" and "color"

import React from "react";

interface IconItem {
  icon: any;
  name: string;
  color?: string;
}

interface IconsSectionProps {
  title: string;
  icons: IconItem[];
}

const IconsSection: React.FC<IconsSectionProps> = ({ title, icons }) => {
  return (
    <div>
      <h2 className="text-base md:text-xl font-yesevaOne">{title}</h2>
      <div className="flex bg-[#e8e8e8a7] rounded-lg justify-center m-2 xs:p-1 md:p-5 flex-wrap">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center xs:px-5 xs:py-3 md:px-5 xs:w-16 md:w-24 text-center"
          >
            {React.createElement(item.icon, {
              className: "xs:text-3xl md:text-5xl p-1",
              style: { color: item.color },
            })}
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsSection;

