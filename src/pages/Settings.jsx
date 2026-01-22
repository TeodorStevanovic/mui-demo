import { Box, Switch, Typography, List, ListItem } from "@mui/material";
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
      <List>
        <ListItem>
          <Typography variant="h6">Show Username:</Typography>
          <Switch
            checked={showUsername}
            onChange={() => setShowUsername((prev) => !prev)}
          />
        </ListItem>

        <ListItem>
          <Typography variant="h6">Show Users Email:</Typography>
          <Switch
            checked={showUserEmail}
            onChange={() => setShowUserEmail((prev) => !prev)}
          />
        </ListItem>

        <ListItem>
          <Typography variant="h6">Dark Mode:</Typography>
          <Switch
            checked={mode === "dark"}
            onChange={() =>
              setMode((prev) => (prev === "light" ? "dark" : "light"))
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Settings;
