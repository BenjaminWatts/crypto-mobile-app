import React from "react";
import { TextInput } from "react-native";
import {log} from "../services/log";

type SearchBoxProps = {
  onUpdated: (query: string) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ onUpdated }) => {
  const [query, setQuery] = React.useState<string>("");
  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      value={query}
      placeholder="Search"
      onChangeText={(newQuery) => {
        log.debug(`SearchBox updating query to: ${newQuery}`);
        setQuery(newQuery);
        onUpdated(newQuery);
      }}
      
    />
  );
};
