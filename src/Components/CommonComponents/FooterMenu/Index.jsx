import React from "react";

const FooterMenu = ({
  header = "ex:header",
  listItem = [{ id: 1, text: "test", link: null }],
}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <h4 className="font-popins text-[20px] font-medium text-primaryWhite">
          {header}
        </h4>
      </div>
      <div>
        <ul className="flex flex-col gap-y-4">
          {listItem.map((item) => (
            <li
              key={item.id}
              className="font-popins text-[16px] text-primaryWhite max-w-[175px]"
            >
              {item.link ? (
                <a
                  className="font-popins text-[16px] text-primaryWhite max-w-[175px]"
                  href={item.link}
                >
                  {item.text}
                </a>
              ) : (
                <p className="font-popins text-[16px] text-primaryWhite max-w-[175px]">
                  {item.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
