import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({
  anchorEl,
  handleOpenMenu,
  handleCloseMenu,
  searchTerm,
  setSearchTerm,
}) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem
            onClick={() => {
              navigate("/");
              handleCloseMenu();
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/users");
              handleCloseMenu();
            }}
          >
            Users
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users Profile
        </Typography>
        <Box>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
