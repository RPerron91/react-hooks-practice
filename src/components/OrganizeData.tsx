import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { TestComponent } from "./TestComponent";

// Dispatch, SetStateAction

interface Types {
  type: {
    name: string;
  };
}

interface Moves {
  move: {
    name: string;
  };
}

interface Sprites {
  sprites: {
    front_default: string;
  };
}

export interface PokeDesc {
  name: string;
  types: Types[];
  moves: Moves[];
  picture: Sprites;
  height: number;
  weight: number;
}

const placeholder = {
  name: null,
  types: [],
  moves: [],
  picture: null,
  height: null,
  weight: null,
};

export function OrganizeData({ callingApi }) {
  const [pokeData, setPokemon]: [PokeDesc, Dispatch<SetStateAction<PokeDesc>>] =
    useState(placeholder);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    const types = [];
    const moves = [];
    if (callingApi() != undefined) {
      const data = callingApi();
      for (var i = 0; i < data.types.length; i++) {
        types.push(data.types[i].type.name);
      }
      for (var i = 0; i < data.types.length; i++) {
        moves.push(data.moves[i].move.name);
      }
      const pokeDetails: PokeDesc = {
        name: data.name,
        types: types,
        moves: moves,
        picture: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
      };
      console.log(callingApi());
      setPokemon(pokeDetails);
      setFirstRun(false);
    }
  }, [callingApi]);

  if (!firstRun) {
    return (
      <>
        <TestComponent pokemon={pokeData} />
      </>
    );
  } else {
    return <div>Need Pokemon ID First</div>;
  }
}
