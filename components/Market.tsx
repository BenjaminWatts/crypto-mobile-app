import React from "react";
import { useGetCryptosQuery } from "../services/state/api";
import { Text, View } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { urls } from "../services/nav";
import { ApiError } from "./ApiError";
import { FlashList } from "@shopify/flash-list";
import log from '../services/log'

const perPage = 20

export const MarketList = () => {
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
    if (error) {
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
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, width: "100%", height: 50}}>
              <Link
                href={{
                  pathname: urls.coin,
                  query: {
                    id: item.id,
                  },
                }}
              >
                <Text>{item.name}</Text>
              </Link>
            </View>
          );
        }}
        onScrollToTop={() => setPage(() => {
          const newPage = Math.min(page - 1, 1);
          log.debug(`scrolling back to page ${newPage}`)
          return newPage;
        })}
        onEndReachedThreshold={0.3}
        onEndReached={() => setPage(() => {
          const newPage = page + 1;
          log.debug(`scrolling to page`)
          return newPage;
        })}
      />

  );
};
