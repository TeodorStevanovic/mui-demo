import React, { useState } from "react";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUsername, setShowUsername] = useState(true);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <Header
        anchorEl={anchorEl}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Outlet context={{searchTerm, showUsername, setShowUsername}} />
    </>
  );
};

export default Layout;
