import { Box, Switch, List, ListItem, ListItemText } from "@mui/material";
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
          <ListItemText variant="h6">Show Username:</ListItemText>
          <Switch
            checked={showUsername}
            onChange={() => setShowUsername((prev) => !prev)}
          />
        </ListItem>

        <ListItem>
          <ListItemText variant="h6">Show Users Email:</ListItemText>
          <Switch
            checked={showUserEmail}
            onChange={() => setShowUserEmail((prev) => !prev)}
          />
        </ListItem>

        <ListItem>
          <ListItemText variant="h6">Dark Mode:</ListItemText>
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
