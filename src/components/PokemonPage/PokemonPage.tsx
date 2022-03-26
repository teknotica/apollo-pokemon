import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../queries";
import type { Pokemons, PokemonItem } from "../../types";
import { PokemonCard } from "../PokemonCard";
import { PokemonSelector } from "../PokemonSelector";

import "./PokemonPage.css";

export const PokemonPage: FunctionComponent = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonItem | null>(
    null
  );
  const { loading, error, data } = useQuery<Pokemons>(GET_POKEMONS);

  if (loading) {
    return <p>Loading pokemons for you...</p>;
  }

  if (error) {
    return <p>`An error just occured: ${error}`</p>;
  }

  if (!data) {
    return null;
  }

  const onChange = (pokemon: PokemonItem) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="pokemonContainer">
      <div className="pokemonList">
        <PokemonSelector items={data.pokemons.results} onChange={onChange} />
      </div>
      <div className="pokemonContent">
        {!selectedPokemon ? (
          <p>No Pokemon has been selected yet</p>
        ) : (
          <PokemonCard {...selectedPokemon} />
        )}
      </div>
    </div>
  );
};
