import React from "react";
import log from "../services/log";
import { useGetCryptoQuery } from "../services/state/api";
import { Loading } from "../atoms/loading";
import { CoinDetail } from "../atoms/Coin";
import { useNavigation } from "expo-router";

type InformationProps = {
  coinId: string;
};
export const Information: React.FC<InformationProps> = ({ coinId }) => {
  log.debug(`Information: ${coinId}`);
  const nav = useNavigation();
  const { data, isLoading } = useGetCryptoQuery({ coinId }, {
    pollingInterval: 30000,
  });
  if (isLoading || !data) {
    nav.setOptions({ title: 'Coin Loading ...' });
    log.debug(`Information: ${coinId} loading`);
    return <Loading />;
  }
  log.debug(`Information: ${coinId} loaded`)
  nav.setOptions({ title: data.name });
  return <CoinDetail data={data} />;
};
