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
      <List sx={{ width: "100%" }}>
        <ListItem>
          <ListItemText>Show Username:</ListItemText>
          <Switch
            checked={showUsername}
            onChange={() => setShowUsername((prev) => !prev)}
          />
        </ListItem>
        <hr />
        <ListItem>
          <ListItemText>Show Users Email:</ListItemText>
          <Switch
            checked={showUserEmail}
            onChange={() => setShowUserEmail((prev) => !prev)}
          />
        </ListItem>
        <hr />
        <ListItem>
          <ListItemText>Dark Mode:</ListItemText>
          <Switch
            checked={mode === "dark"}
            onChange={() =>
              setMode((prev) => {
                const newThemeMode = prev === "light" ? "dark" : "light";
                localStorage.setItem("mode", newThemeMode);
                return newThemeMode;
              })
            }
          />
        </ListItem>
        <hr />
      </List>
    </Box>
  );
};

export default Settings;
