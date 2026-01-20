import { Box, Switch, Typography } from "@mui/material";
import React from "react";

const Settings = () => {
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
      <Switch checked={checked} onChange={() => {}} />
    </Box>
  );
};

export default Settings;
