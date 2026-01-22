import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUsername, setShowUsername] = useState(true);
  const [showUserEmail, setShowUserEmail] = useState(true);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("mode");

    if (savedThemeMode) {
      setMode(savedThemeMode);
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          anchorEl={anchorEl}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Outlet
          context={{
            searchTerm,
            showUsername,
            setShowUsername,
            showUserEmail,
            setShowUserEmail,
            mode,
            setMode,
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default Layout;
