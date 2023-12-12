import React from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { SafeAreaView, View } from "react-native";

export const Search: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  return (
    <SafeAreaView>
      <View style={{ height: 50}}>
        <SearchBox onUpdated={setQuery} />
      </View>
      <View style={{ height: "100%" }}>
        {query.length > 2 && <SearchResults query={query} />}
      </View>
    </SafeAreaView>
  );
};
