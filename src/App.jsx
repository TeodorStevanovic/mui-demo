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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const App = () => {
  const [users, setUsers] = useState([]);

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
      <Box sx={{padding: 1}}>
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1976d2",
                  borderRadius: 2,
                }}
              >
                <PersonIcon sx={{ width: 50, height: 50 }} />
                <CardHeader
                  title={user.name}
                  subheader={user.username}
                  sx={{ width: 350, background: "#fff" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default App;
