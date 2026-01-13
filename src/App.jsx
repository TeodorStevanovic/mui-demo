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
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

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
            <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
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
      <Box sx={{ padding: 1 }}>
        <Grid container spacing={10}>
          {filteredUsers.length === 0 ? (
            <Typography>User Not Found</Typography>
          ) : (
            filteredUsers.map((user) => (
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
                    onClick={() => handleOpenDialog(user)}
                    sx={{ color: "#fff" }}
                  >
                    Learn more
                  </Button>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>About user:</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Typography> E-mail: {selectUser?.email} </Typography>
            <Typography>Phone Number: {selectUser?.phone} </Typography>
            <Typography>
              Address: {selectUser?.address.street} / {selectUser?.address.city}
            </Typography>
            <Typography>Website: {selectUser?.website}</Typography>
            <Typography>Company: {selectUser?.company.name}</Typography>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default App;
