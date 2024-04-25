import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";

export function TestComponent({ pokemon }) {
  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  const colorPicker = (type) => {
    const color = {
      normal: "#FFFFFF",
      fire: "#e31f09",
      water: "#2da0ed",
      grass: "#68d61e",
      flying: "#9de8eb",
      fighting: "#c7953a",
      poison: "#7c15d1",
      electric: "#fafa14",
      ground: "#9e7f4a",
      rock: "#705321",
      psychic: "#bb58ed",
      ice: "10e6e6",
      bug: "#61b340",
      ghost: "#632e7d",
      steel: "#676b66",
      dragon: "#1537b0",
      dark: "#121212",
      fairy: "#f587f1",
      Error: "#FFFFFF",
    };

    return color[type];
  };

  return (
    <>
      <div>
        <Box
          height={600}
          width={420}
          display="flex"
          my={4}
          alignItems="center"
          p={2}
          sx={{ border: "2px solid grey", bgcolor: "#e6cc00" }}
        >
          <Box
            height={550}
            width={400}
            my={4}
            alignItems="center"
            gap={4}
            p={2}
            sx={{
              border: "2px solid grey",
              bgcolor: colorPicker(pokemon.types[0]),
            }}
          >
            <Grid container spacing={1} justifyContent="center">
              <Grid item md={2}>
                <h2>{pokemon.name}</h2>
              </Grid>
              <Grid item md={8}></Grid>
              <Grid item md={2}>
                <h3>Types:</h3>
                {pokemon.types.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </Grid>
              <Box
                component="img"
                alignItems="center"
                sx={{
                  height: 190,
                  width: 190,
                  maxHeight: { xs: 190, md: 190 },
                  maxWidth: { xs: 190, md: 190 },
                  border: "4px solid black",
                  bgcolor: "#f2efdc",
                }}
                alt={pokemon.name}
                src={pokemon.picture.sprites.front_default}
              />
              <Grid item md={12}>
                <b>Moves</b>:
                {pokemon.moves.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent="center"
                    sx={{
                      border: "3px solid grey",
                      mt: "3px",
                      mb: "3px",
                      pt: "1px",
                      pb: "4px",
                      bgcolor: "#f2efdc",
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Grid>
              <Grid item md={12}>
                <b>Weight:</b> {pokemon.weight}
              </Grid>
              <Grid item md={12}>
                <b>Height:</b> {pokemon.height}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
