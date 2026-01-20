import { Box, Switch, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import React from "react";

const Settings = () => {
  const { showUsername, setShowUsername } = useOutletContext();
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
    </Box>
  );
};

export default Settings;
