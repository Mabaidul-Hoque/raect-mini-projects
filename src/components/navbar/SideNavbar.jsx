import React from "react";

const pageTitles = ["ExapndingCards"];
const SideNavbar = () => {
  return (
    <div>
      <ul>
        {pageTitles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
