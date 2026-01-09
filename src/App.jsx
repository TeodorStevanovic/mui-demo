import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Button variant="text" onClick={incrementCounter}>
        <AddIcon />
      </Button>
      <p>{count}</p>
      <Button variant="text" onClick={decrementCounter}>
        <RemoveIcon />
      </Button>
    </>
  );
}

export default App;
