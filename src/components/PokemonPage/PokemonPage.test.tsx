import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_POKEMONS } from "../../queries";
import { PokemonPage } from "./PokemonPage";

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
    },
    result: {
      data: {
        pokemons: {
          count: 2,
          message: "",
          next: "",
          previous: "",
          results: [
            {
              id: 1,
              name: "ivysaur",
              image: "ivysaur-image",
            },
            {
              id: 2,
              name: "venusaur",
              image: "venusaur-image",
            },
          ],
        },
      },
    },
  },
];

describe("PokemonPage", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonPage />
      </MockedProvider>
    );

    expect(
      screen.getByText(/Loading pokemons for you.../i)
    ).toBeInTheDocument();
  });

  it("should render list of pokemons", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonPage />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
    expect(screen.getByText(/venusaur/i)).toBeInTheDocument();
  });
});
