export type Pokemon = {
  id: number
  name: string
  order: number
  height: number
  weight: number
  message: string
  abilities: Ability[]
  moves: Move[]
}

export type Pokemons = {
  pokemons: {
    count: number
    next: string
    previous: string
    status: boolean
    message: string
    results: PokemonItem[]
  }
}

export type PokemonVars = {
  name: string;
}

export type PokemonItem = {
  id: number
  name: string
  image: string
}

type BaseName = {
  id: number
  name: string
}

type Ability = {
  ability: BaseName
}

type Move = {
  move: BaseName
}