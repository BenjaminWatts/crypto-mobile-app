import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinDetail, CoinListItem, MarketChart } from "../../common/types";

const currency = "usd";
const locale = "en";

type GetCryptosParams = {
  page: number;
  perPage: number;
};
type GetCryptosResponse = CoinListItem[];

type GetCryptoParams = {
  coinId: string;
};
type GetCryptoResponse = CoinDetail;

type MarketChartParams = {
  coinId: string;
  days: number;
};
type MarketChartResponse = MarketChart;

export const geckoApi = createApi({
  reducerPath: "geckoApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.coingecko.com/api/v3` }),
  endpoints: (builder) => ({
    getCryptos: builder.query<GetCryptosResponse, GetCryptosParams>({
      query: ({ page, perPage }) => {
        const perPageSize = Number(perPage);
        const url = `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPageSize}&page=${page}&sparkline=false&locale=${locale}`;
        return {
          url,
          method: "get",
        };
      },
    }),
    getCrypto: builder.query<GetCryptoResponse, GetCryptoParams>({
      query: ({ coinId }) =>
        `/coins/${coinId}?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    }),
    marketChart: builder.query<MarketChartResponse, MarketChartParams>({
      query: (options) =>
        `/coins/${options.coinId}/market_chart?vs_currency=usd&days=${options.days}`,
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
});

export const {
  useGetCryptosQuery,
  useGetCryptoQuery,
  useMarketChartQuery,
} = geckoApi;
