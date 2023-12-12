import React from "react";
import { View, Text, ScrollView } from "react-native";
import * as t from "../common/types";
import log from "../services/log";
type CoinDetailProps = {
  data: t.CoinDetail;
};

const renderDatetime = (dts: string) => {
  const dt = new Date(dts);
  return dt.toLocaleString();
};

export const CoinDetail: React.FC<CoinDetailProps> = ({ data }) => {
  log.debug("CoinDetail", data.id);
  console.log(data);
  return (
    <View>
      <View>
        <Text>{data.name}</Text>
      </View>
      <View>
        <Text>Updated: {renderDatetime(data.last_updated)}</Text>
      </View>
      <View>
        <Text>Price: {data.market_data.current_price.usd}</Text>
      </View>
      <ScrollView>
        <Text>Price: {data.description.en}</Text>
      </ScrollView>
    </View>
  );
};
