import React from "react";
import { getFavourites } from "../services/state/favourites";
import { FlashList } from "@shopify/flash-list";
import { Text } from "react-native";
import { Link } from "expo-router";
import { urls } from "../services/nav";
import { log } from "../services/log";
import { useAppSelector } from "../services/state";
import {View} from 'react-native'

export const Favourites: React.FC = () => {
  log.debug(`Favourites`);
  const favourites = useAppSelector((state) => getFavourites(state));
  return (
    <FlashList
      data={favourites}
      ListEmptyComponent={<Text>No existing favourites</Text>}
      estimatedItemSize={250}
      renderItem={(item) => {
        return (
          <Link href={urls.coin(item.item.id)}>
            <View style={{height: 50}}>
              <Text>{item.item.name}</Text>
            </View>
          </Link>
        );
      }}
    />
  );
};
