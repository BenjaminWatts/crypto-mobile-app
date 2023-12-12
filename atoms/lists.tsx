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

type LiveMarketCoinListProps = {
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const formatters = {
  priceUsd: (dollars: number) => {
    if (dollars < 1) {
      // return as cents
      const cents = Math.round(dollars * 100);
      return `${cents}¢`;
    }
    if (dollars < 100) {
      const rounded = Math.round(dollars * 100) / 100;
      return `$${rounded}`;
    }
    const rounded = Math.round(dollars);
    return `$${rounded}`;
  },
  percentage: (percentage: number) => {
    return `${Math.round(percentage * 100)}%`;
  },
};

export const LiveMarketCoinList: React.FC<LiveMarketCoinListProps> = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
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
          <View style={{ width: "50%" }}>
            <ListItem.Title>{name}</ListItem.Title>
          </View>
          <View style={{ width: "20%", alignItems: 'flex-end' }}>
            <ListItem.Subtitle>
              {formatters.percentage(price_change_percentage_24h)}
            </ListItem.Subtitle>
          </View>
          <View style={{ width: "30%", alignItems: 'flex-end' }}>
            <ListItem.Title>
              {formatters.priceUsd(current_price)}
            </ListItem.Title>
          </View>
          {/* <ListItem.Title>{formatters.percentage(price_change_percentage_24h)}</ListItem.Title> */}
        </View>
      </ListItem.Content>
    </ListItem>
  );
};
