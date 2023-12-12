import React from "react";
import { useSearchQuery } from "../services/state/api";
import { FlashList } from "@shopify/flash-list";
import { RefreshControl } from "react-native-gesture-handler";
import { log } from "../services/log";
import { Pressable, Text, View } from "react-native";
import { CoinSearchResult } from "../common/types";

import { SearchedCoin } from "../atoms/lists";
import { useRouter } from "expo-router";
import { urls } from "../services/nav";
import { NoResultsFound } from "../atoms/cards";

type SearchResultsProps = {
  query: string;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const router = useRouter();
  log.debug(`SearchResults: render with query ${query}`);
  const q = useSearchQuery({ query });
  const data: CoinSearchResult[] = q.data?.coins || [];
  return (
    <FlashList
      estimatedItemSize={100}
      refreshControl={
        <RefreshControl refreshing={q.isLoading} onRefresh={q.refetch} />
      }
      ListEmptyComponent={<NoResultsFound/>}
      data={data}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() => {
              router.push(urls.coin(item.id))
            }}
          >
            <SearchedCoin name={item.name} iconUrl={item.thumb} />
          </Pressable>
        );
      }}
    />
  );
};
