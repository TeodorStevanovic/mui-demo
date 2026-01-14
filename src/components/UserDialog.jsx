import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const UserDialog = ({ openDialog, handleClose, selectUser }) => {
  return (
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
  );
};

export default UserDialog;
