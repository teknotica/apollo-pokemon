import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../queries";
import type { Pokemons, PokemonItem } from "../../types";
import { PokemonCard } from "../PokemonCard";

import "./PokemonList.css";

export const PokemonList: FunctionComponent = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonItem | null>(
    null
  );
  const { loading, error, data } = useQuery<Pokemons>(GET_POKEMONS);

  if (!data) {
    return null;
  }

  const onClickHandler = (event: React.MouseEvent, pokemon: PokemonItem) => {
    event.preventDefault();
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      {loading && <p>Loading pokemons for you...</p>}
      {error && <p>`An error just occured: ${error}`</p>}
      <ul className="pokemonList">
        {data.pokemons.results.map((item: PokemonItem) => (
          <li key={item.id}>
            <a onClick={(event) => onClickHandler(event, item)}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="pokemonContent">
        {!selectedPokemon ? (
          <p>Select a Pokemon from the list</p>
        ) : (
          <PokemonCard {...selectedPokemon} />
        )}
      </div>
    </>
  );
};
