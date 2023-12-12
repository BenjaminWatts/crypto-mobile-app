import React from "react";
import { ListItem } from "@rneui/themed";
import { View } from "react-native";
import { CoinIcon } from "./images";
import formatters from "../services/formatters";

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

export const SearchedCoin = FavouriteCoin

type LiveMarketCoinListProps = {
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
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
