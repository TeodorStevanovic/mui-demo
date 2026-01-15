import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import User from "./pages/User";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
      />
      <User />
    </>
  );
};

export default App;
