import React, { useState, createContext } from "react";
import { Button, TextField } from "@mui/material";
import { ApiCall } from "./ApiCall";

export const clickContext = createContext(1);

export function IdInput() {
  const [id, setId] = useState(1);
  const [b, setB] = useState(1);
  return (
    <>
      <h1>Enter Pokemon Id Number:</h1>
      <div>
        <TextField
          id="outlined-basic"
          label="pokemon id"
          variant="outlined"
          value={id}
          onChange={(e) => {
            setId(parseInt(e.target.value));
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setB(() => {
              return id;
            });
          }}
          value={b}
        >
          Submit ID: {id}
        </Button>
      </div>
      <div>
        <clickContext.Provider value={b}>
          <ApiCall />
        </clickContext.Provider>
      </div>
    </>
  );
}
