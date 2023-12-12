import React from "react";
import log from "../services/log";
import { useGetCryptoQuery } from "../services/state/api";
import { Loading } from "../atoms/loading";
import { useNavigation } from "expo-router";
import { ToggleFavourite } from "./ToggleFavourite";
import { DescriptionCard, PricesCard } from "../atoms/cards";

type InformationProps = {
  coinId: string;
};
export const Information: React.FC<InformationProps> = ({ coinId }) => {
  log.debug(`Information: ${coinId}`);
  const nav = useNavigation();
  const { data, isLoading } = useGetCryptoQuery(
    { coinId },
    {
      pollingInterval: 30000,
    }
  );
  if (isLoading || !data) {
    nav.setOptions({ title: "Coin Loading ..." });
    log.debug(`Information: ${coinId} loading`);
    return <Loading />;
  }
  log.debug(`Information: ${coinId} loaded`);
  nav.setOptions({
    title: data.name,
    headerRight: () => (
      <ToggleFavourite
        favourite={{
          id: data.id,
          name: data.name,
          image_thumb: data.image.thumb,
        }}
      />
    ),
  });
  return (
    <>
      <PricesCard
        current_price={data.market_data.current_price.usd}
        price_change_percentage_7d={data.market_data.price_change_percentage_7d}
        price_change_percentage_30d={
          data.market_data.price_change_percentage_30d
        }
        price_change_percentage_1y={data.market_data.price_change_percentage_1y}
      />

      <DescriptionCard descriptionHtml={data.description.en} />
    </>
  );
};
