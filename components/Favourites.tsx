import React from "react";
import { getFavourites } from "../services/state/favourites";
import { FlashList } from "@shopify/flash-list";
import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import { urls } from "../services/nav";
import { log } from "../services/log";
import { useAppSelector } from "../services/state";
import { FavouriteCoin } from "../atoms/lists";

export const Favourites: React.FC = () => {
  log.debug(`Favourites`);
  const router = useRouter();
  const favourites = useAppSelector((state) => getFavourites(state));
  return (
    <FlashList
      data={favourites}
      ListEmptyComponent={<Text>No existing favourites</Text>}
      estimatedItemSize={250}
      renderItem={(item) => {
        return (
          <Pressable onPress={() => router.push(urls.coin(item.item.id))}>
            <FavouriteCoin
              name={item.item.name}
              iconUrl={item.item.image_thumb}
            />
          </Pressable>
        );
      }}
    />
  );
};
