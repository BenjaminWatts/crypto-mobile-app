import React from "react";
import {log} from "../services/log";
import { CoinSearch } from "../atoms/inputs";

type SearchBoxProps = {
  onUpdated: (query: string) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ onUpdated }) => {
  const [query, setQuery] = React.useState<string>("");
  return (
    <CoinSearch
      value={query}
      onChangeText={(newQuery) => {
        log.debug(`SearchBox updating query to: ${newQuery}`);
        setQuery(newQuery);
        onUpdated(newQuery);
      }}
    />
  )
};
