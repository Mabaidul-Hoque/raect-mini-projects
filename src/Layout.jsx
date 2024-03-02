import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SideNavbar from "./components/navbar/SideNavbar";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div id="layout">
      <nav>Navbar</nav>
      <div className="flex bg-red-500">
        <SideNavbar />
        <main>{pathname === "/" ? <Home /> : <Outlet />}</main>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
