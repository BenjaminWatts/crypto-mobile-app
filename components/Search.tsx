import React from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { SafeAreaView, View, useWindowDimensions } from "react-native";

const searchHeight = 65

export const Search: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const height = useWindowDimensions().height;
  return (
    <SafeAreaView>
      <View style={{ height: searchHeight}}>
        <SearchBox onUpdated={setQuery} />
      </View>
      <View style={{ height: height - searchHeight }}>
        {query.length > 2 && <SearchResults query={query} />}
      </View>
    </SafeAreaView>
  );
};
