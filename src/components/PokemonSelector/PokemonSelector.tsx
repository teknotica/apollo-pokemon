import React, { FunctionComponent } from "react";
import type { PokemonItem } from "../../types";

export const PokemonSelector: FunctionComponent<Props> = ({
  name = "select-list",
  items,
  onChange,
}) => {
  if (!items) {
    return null;
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    const selectedItem = items.filter((item) => item.name === selectedValue)[0];

    onChange(selectedItem);
  };

  return (
    <select name={name} onChange={onChangeHandler}>
      <option value="">Select a Pokemon from the list</option>
      {items.map((item, index: number) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

type Props = {
  name?: string;
  items: PokemonItem[];
  onChange: (item: PokemonItem) => void;
};
