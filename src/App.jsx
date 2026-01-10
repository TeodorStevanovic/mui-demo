import React, { useState } from "react";
import { CssBaseline, Box, Typography } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Typography variant="h3">My To Do List</Typography>
    </Box>
  );
};

export default App;
