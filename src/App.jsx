import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  CssBaseline,
  Grid,
  Card,
  CardHeader,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = (clickedUser) => {
    setSelectUser(clickedUser);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Users Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 1 }}>
        <Grid container spacing={10}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#1976d2",
                  borderRadius: 2,
                }}
              >
                <PersonIcon sx={{ width: 50, height: 50 }} />
                <CardHeader
                  title={user.name}
                  subheader={user.username}
                  sx={{ width: 350, backgroundColor: "#fff" }}
                />
                <Button
                  variant="text"
                  onClick={() => handleOpen(user)}
                  sx={{ color: "#fff" }}
                >
                  Learn more
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>About user:</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <Typography> E-mail: {selectUser?.email} </Typography>
            <Typography>Phone Number: {selectUser?.phone} </Typography>
            <Typography>Address: {selectUser?.address.street} / {selectUser?.address.city}</Typography>
            <Typography>Website: {selectUser?.website}</Typography>
            <Typography>Company: {selectUser?.company.name}</Typography>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default App;
