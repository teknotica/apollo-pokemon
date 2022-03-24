import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMON } from "../../queries";
import type { Pokemon, PokemonVars } from "../../types";

import "./PokemonCard.css";

export const PokemonCard: FunctionComponent<Props> = ({ name, image }) => {
  const { loading, data } = useQuery<Pokemon, PokemonVars>(GET_POKEMON, {
    variables: { name },
  });

  console.log(data);

  return (
    <div className="pokemonCard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {name}</p>
          <img alt={name} src={image} />
        </>
      )}
    </div>
  );
};

type Props = {
  name: string;
  image: string;
};
