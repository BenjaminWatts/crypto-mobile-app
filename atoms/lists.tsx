import React from "react";
import { ListItem } from "@rneui/themed";
import { View } from "react-native";
import { CoinIcon } from "./images";

type FavouriteCoinProps = {
  name: string;
  iconUrl: string;
};

export const FavouriteCoin: React.FC<FavouriteCoinProps> = ({
  name,
  iconUrl,
}) => {
  return (
    <ListItem>
      <ListItem.Content>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ListItem.Title>{name}</ListItem.Title>
          <CoinIcon url={iconUrl} />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};
