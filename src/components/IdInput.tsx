import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { TestComponent } from "./PokeDisplay";
import { PokeDesc, Sprites } from "./Typing";

export function IdInput() {
  const placeholder: PokeDesc = {
    name: null,
    types: [],
    moves: [],
    picture: null,
    height: null,
    weight: null,
  };

  const [id, setId] = useState(1);
  const [b, setB] = useState(placeholder);
  //const [errorState, setErrorState] = useState(false);

  const handleClick = async (ID: number) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${ID}`
      );
      const types: string[] = [];
      const moves: string[] = [];
      for (var i = 0; i < data.types.length; i++) {
        types.push(data.types[i].type.name);
      }

      const minMoves = Math.min(data.moves.length, 4);
      for (var i = 0; i < minMoves; i++) {
        moves.push(data.moves[i].move.name);
      }
      const img: Sprites = {
        sprites: {
          front_default: data.sprites.front_default,
        },
      };
      const returnable: PokeDesc = {
        name: data.name,
        types: types,
        moves: moves,
        picture: img,
        height: data.height,
        weight: data.weight,
      };

      setB(returnable);
    } catch {
      const errorImg: Sprites = {
        sprites: {
          front_default: "https://minecraft.novaskin.me/skin/4976334169.png",
        },
      };
      const errorMon: PokeDesc = {
        name: "Not Found",
        types: ["Error", "Not Found"],
        moves: [
          "Never Gonna Give You Up",
          "Never Gonna Let You Down",
          "404 Means Page Not Found",
        ],
        picture: errorImg,
        height: 404,
        weight: 404,
      };
      setB(errorMon);
    }
  };

  useEffect(() => {
    handleClick(1);
  }, []);

  if (b.name) {
    return (
      <>
        <h1>Enter Pokemon Id Number:</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="pokemon id"
            variant="outlined"
            value={id}
            type="number"
            onChange={(e) => {
              setId(parseInt(e.target.value));
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleClick(id);
            }}
            value={id}
          >
            Submit ID: {id}
          </Button>
        </div>
        <div>
          <TestComponent pokemon={b} />
        </div>
      </>
    );
  }
  return <h1>Loading...</h1>;
}
