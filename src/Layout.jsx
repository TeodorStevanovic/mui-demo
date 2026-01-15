import React, { useState } from "react";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline/>
      <Header
        anchorEl={anchorEl}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Outlet />
    </>
  );
};

export default Layout;
