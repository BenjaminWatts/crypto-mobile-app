import React from "react";
import { useSearchQuery } from "../services/state/api";
import { FlashList } from "@shopify/flash-list";
import { RefreshControl } from "react-native-gesture-handler";
import { log } from "../services/log";
import { Text, View } from "react-native";
import { CoinSearchResult } from "../common/types";
import { Link } from "expo-router";
import { urls } from "../services/nav";

type SearchResultsProps = {
  query: string;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  log.debug(`SearchResults: render with query ${query}`);
  const q = useSearchQuery({ query });
  const data: CoinSearchResult[] = q.data?.coins || [];
  return (
    <FlashList
      estimatedItemSize={100}
      refreshControl={
        <RefreshControl refreshing={q.isLoading} onRefresh={q.refetch} />
      }
      ListEmptyComponent={<Text>No results</Text>}
      data={data}
      renderItem={({ item }) => {
        return (
          <Link href={urls.coin(item.id)}>
          <View style={{ height: 50 }}>
            <Text>{item.name}</Text>
          </View>
          </Link>
        );
      }}
    />
  );
};
