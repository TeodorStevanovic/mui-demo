import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import User from "./pages/User";

const App = () => {
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
      <CssBaseline />
      <Header
        anchorEl={anchorEl}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <User searchTerm={searchTerm} />
    </>
  );
};

export default App;
