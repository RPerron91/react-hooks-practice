import React from "react";
import axios from "axios";
import { useCallback, useState, useContext } from "react";
import { OrganizeData } from "./OrganizeData";
import { clickContext } from "./IdInput";

export function ApiCall() {
  const bClick = useContext(clickContext);
  const [pokeData, setPokeData] = useState(undefined);

  const callingApi = useCallback(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${bClick}`)
      .then((response) => {
        setPokeData(response.data);
      });
    return pokeData;
  }, [bClick]);
  return <OrganizeData callingApi={callingApi} />;
}
