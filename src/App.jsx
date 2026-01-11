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
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const App = () => {
  const [dialog, setDialog] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      task: "",
    },
  });

  const handleOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleAddTask = (data) => {
    setTasks((prevTask) => [...prevTask, data.task]);
    reset();
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
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <Controller
            name="task"
            control={control}
            render={({ field }) => (
              <TextareaAutosize
                {...field}
                maxRows={4}
                style={{ width: "100%" }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(handleAddTask)}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
