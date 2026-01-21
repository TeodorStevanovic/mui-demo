import { Box, Switch, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import React from "react";

const Settings = () => {
  const {
    showUsername,
    setShowUsername,
    showUserEmail,
    setShowUserEmail,
    mode,
    setMode,
  } = useOutletContext();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "10px",
      }}
    >
      <Typography variant="h6">Show Username:</Typography>
      <Switch
        checked={showUsername}
        onChange={() => setShowUsername((prev) => !prev)}
      />

      <Typography variant="h6">Show Users Email:</Typography>
      <Switch
        checked={showUserEmail}
        onChange={() => setShowUserEmail((prev) => !prev)}
      />

      <Typography variant="h6">Dark Mode:</Typography>
      <Switch
        checked={mode === "dark"}
        onChange={() =>
          setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
    </Box>
  );
};

export default Settings;
