import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Typography variant="h3">Users Profile</Typography>
        <Typography variant="h5">
          Browse and explore user profiles with detailed information.
        </Typography>
        <Typography variant="p">
          This application allows you to view user profiles fetched from an
          external API. You can search users, open detailed profile information,
          and navigate through the app using a modern React setup.
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/users");
          }}
        >
          View Users
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
