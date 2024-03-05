import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const HiddenSearchWidget = () => {
  const [inputText, setInputText] = useState("");
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleFocusChange = () => {
    setFocus(true);
  };
  return (
    <div>
      {/* SEARCH CONATINER */}
      <div className="flex flex-col gap-10 justify-center items-center pt-40">
        <div className="relative">
          {/* SEARCH INPUT */}
          <input
            className={`${
              focus ? "w-64" : "w-14"
            } border border-gray-500 p-2  pr-4 rounded-md hover:border-green-500 `}
            onChange={handleChange}
            onFocus={handleFocusChange}
            type="text"
            placeholder="Search..."
            id="search_input"
          />

          {focus && (
            <>
              <div className="border-r border-gray-500 h-6 absolute top-2 right-14"></div>
              <button className="">
                <SearchOutlined className="text-2xl absolute top-0 right-4" />
              </button>
            </>
          )}
        </div>
        {/* <p className="text-xl max-w-48">{inputText}</p> */}
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
