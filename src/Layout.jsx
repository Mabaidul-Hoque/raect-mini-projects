import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SideNavbar from "./components/navbar/SideNavbar";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div id="layout">
      <nav className="text-center bg-gray-700 h-20 text-white p-4">Navbar</nav>
      <div className="w-screen flex flex-col md:flex-row gap-5 p-10">
        <div className="md:w-1/4 xl:w-1/5">
          <SideNavbar />
        </div>
        <div className="w-screen md:w-3/4 xl:w-4/5">
          <main>{pathname === "/" ? <Home /> : <Outlet />}</main>
        </div>
      </div>
      <footer className="text-center bg-gray-700 h-20 text-white p-4">
        Footer
      </footer>
    </div>
  );
};

export default Layout;
