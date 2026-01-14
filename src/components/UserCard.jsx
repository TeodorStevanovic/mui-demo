import React from "react";
import { Grid, Card, CardHeader, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const UserCard = ({ handleOpenDialog, user }) => {
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
  );
};

export default UserCard;
