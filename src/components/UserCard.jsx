import React from "react";
import { Grid, Card, CardHeader, Button } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const UserCard = ({ handleOpenDialog, user, showUsername, mode }) => {
  return (
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
          subheader={showUsername ? user.username : ""}
          sx={{ width: 350, backgroundColor: mode === "dark" ? "#000" : "#fff" }}
          titleTypographyProps={{
            sx: { color: mode === "dark" ? "#fff" : "#000" },
          }}
          subheaderTypographyProps={{
            sx: { color: mode === "dark" ? "#fff" : "#000" },
          }}
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
  );
};

export default UserCard;
