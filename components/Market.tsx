import React from "react";
import { useGetCryptosQuery } from "../services/state/api";
import { Pressable, Text, View } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { urls } from "../services/nav";
import { ApiError } from "./ApiError";
import { FlashList } from "@shopify/flash-list";
import log from "../services/log";
import { LiveMarketCoinList } from "../atoms/lists";

const perPage = 20;

export const MarketList = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading, refetch } = useGetCryptosQuery(
    {
      page,
      perPage,
    },
    {
      pollingInterval: 30000,
    }
  );
  React.useEffect(() => {
    if (error && !data) {
      ApiError(() => refetch());
    }
  }, [error]);
  return (
    <FlashList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      data={data}
      ListEmptyComponent={() => <Text>No data</Text>}
      keyExtractor={(item) => item.id}
      estimatedItemSize={200}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            testID={`market-list-${index}`}
            onPress={() => {
              router.push(urls.coin(item.id));
            }}
          >
            <LiveMarketCoinList
              name={item.name}
              image={item.image}
              current_price={item.current_price}
              price_change_percentage_24h={item.price_change_percentage_24h}
            />
          </Pressable>
        );
      }}
      onScrollToTop={() =>
        setPage(() => {
          const newPage = Math.min(page - 1, 1);
          log.debug(`scrolling back to page ${newPage}`);
          return newPage;
        })
      }
      onEndReachedThreshold={0.3}
      onEndReached={() =>
        setPage(() => {
          const newPage = page + 1;
          log.debug(`scrolling to page`);
          return newPage;
        })
      }
    />
  );
};
