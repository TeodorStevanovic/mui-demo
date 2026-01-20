import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";
import UserDialog from "../components/UserDialog";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const {searchTerm, showUsername, showUserEmail} = useOutletContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);

  const handleOpenDialog = (clickedUser) => {
    setSelectUser(clickedUser);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={10}>
        {filteredUsers.length === 0 ? (
          <Typography>User Not Found</Typography>
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              handleOpenDialog={handleOpenDialog}
              showUsername={showUsername}
            />
          ))
        )}
      </Grid>
      <UserDialog
        openDialog={openDialog}
        handleClose={handleClose}
        selectUser={selectUser}
        showUserEmail={showUserEmail}
      />
    </Box>
  );
};

export default User;
