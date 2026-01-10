import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextareaAutosize,
} from "@mui/material";

const App = () => {
  const [dialog, setDialog] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleAddTask = () => {
    console.log(newTask);
    setNewTask("");
    handleClose();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Typography variant="h3">My To Do List</Typography>
      <Button onClick={handleOpen}>Add</Button>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextareaAutosize maxRows={20} value={newTask} style={{width: "100%"}} onChange={(e) => setNewTask(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
