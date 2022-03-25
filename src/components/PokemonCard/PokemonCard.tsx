import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMON } from "../../queries";
import type { Pokemon, PokemonVars } from "../../types";

import "./PokemonCard.css";

export const PokemonCard: FunctionComponent<Props> = ({ name, image }) => {
  const { loading, data } = useQuery<Pokemon, PokemonVars>(GET_POKEMON, {
    variables: { name },
  });

  if (!data) {
    return null;
  }

  const { pokemon } = data;

  return (
    <div className="pokemonCard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
                <td>{name}</td>
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
        </>
      )}
    </div>
  );
};

type Props = {
  name: string;
  image: string;
};
