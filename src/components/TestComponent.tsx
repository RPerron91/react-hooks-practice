import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";

export function TestComponent({ pokemon }) {
  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  return (
    <>
      <div>
        <Box
          height={625}
          width={420}
          display="flex"
          my={4}
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: "2px solid grey", bgcolor: "#e6cc00" }}
        >
          <Box
            height={575}
            width={400}
            //display="flex"
            my={4}
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: "2px solid grey", bgcolor: "#FFFFFF" }}
          >
            <Grid container spacing={1}>
              <Grid item md={2}>
                {pokemon.name}
              </Grid>
              <Grid item md={8}></Grid>
              <Grid item md={2}>
                {pokemon.types}
              </Grid>
              <Box
                component="img"
                alignItems="center"
                sx={{
                  height: 200,
                  width: 200,
                  maxHeight: { xs: 200, md: 200 },
                  maxWidth: { xs: 200, md: 200 },
                }}
                alt="The house from the offer."
                src={pokemon.picture}
              />
              <Grid item md={12}>
                Moves: {pokemon.moves}
              </Grid>
              <Grid item md={12}>
                Weight: {pokemon.weight}
              </Grid>
              <Grid item md={12}>
                Height: {pokemon.height}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
