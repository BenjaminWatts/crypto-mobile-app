import React from "react";
import log from "../services/log";
import { useGetCryptoQuery } from "../services/state/api";
import { Loading } from "../atoms/loading";
import { Stack, useNavigation } from "expo-router";
import { DescriptionCard, PricesCard } from "../atoms/cards";
import { InformationHeader } from "../atoms/headers";

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
    // nav.setOptions({ title: "Coin Loading ..." });
    log.debug(`Information: ${coinId} loading`);
    return <Loading />;
  }
  log.debug(`Information: ${coinId} loaded`);
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <InformationHeader data={data} />,
        }}
      />
      {isLoading && !data && <Loading />}
      {!isLoading && data && (
        <>
          <PricesCard
            current_price={data.market_data.current_price.usd}
            price_change_percentage_7d={
              data.market_data.price_change_percentage_7d
            }
            price_change_percentage_30d={
              data.market_data.price_change_percentage_30d
            }
            price_change_percentage_1y={
              data.market_data.price_change_percentage_1y
            }
          />

          <DescriptionCard descriptionHtml={data.description.en} />
        </>
      )}
    </>
  );
};
