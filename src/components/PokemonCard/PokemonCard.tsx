import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";

import { capitalise } from "../../utils/capitalise";
import { GET_POKEMON } from "../../queries";
import type { Pokemon, PokemonVars } from "../../types";

import "./PokemonCard.css";

export const PokemonCard: FunctionComponent<Props> = ({ name, image }) => {
  const { loading, error, data } = useQuery<Pokemon, PokemonVars>(GET_POKEMON, {
    variables: { name },
  });

  if (loading) {
    return <p>{`Loading ${name} for you...`}</p>;
  }

  if (error) {
    return <p>`An error just occured: ${error}`</p>;
  }

  if (!data) {
    return null;
  }

  const { pokemon } = data;

  return (
    <div className="pokemonCard">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{capitalise(name)}</td>
            <td>
              <img alt={name} src={image} />
            </td>
            <td>
              <ul>
                {pokemon.abilities.map((item, index: number) => (
                  <li key={index}>{item.ability.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

type Props = {
  name: string;
  image: string;
};
