import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  Grid,
} from "@mui/material";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import UserDialog from "./components/UserDialog";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenDialog = (clickedUser) => {
    setSelectUser(clickedUser);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header
        anchorEl={anchorEl}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
      />
      <Box sx={{ padding: 1 }}>
        <Grid container spacing={10}>
          {filteredUsers.length === 0 ? (
            <Typography>User Not Found</Typography>
          ) : (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                handleOpenDialog={handleOpenDialog}
              />
            ))
          )}
        </Grid>
        <UserDialog
          openDialog={openDialog}
          handleClose={handleClose}
          selectUser={selectUser}
        />
      </Box>
    </>
  );
};

export default App;
