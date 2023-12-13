import React from "react";
import { SearchBar } from "@rneui/themed";

type CoinSearchProps = {
    value: string;
    onChangeText: (newQuery: string) => void;
};

export const CoinSearch: React.FC<CoinSearchProps> = ({
    onChangeText, value
}) => {
  return <SearchBar placeholder="Enter coin name" onChangeText={onChangeText} value={value} />;
};
