import React from "react";
import {
  Button,
  Dimensions,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useMarketChartQuery } from "../services/state/api";
import { Loading } from "../atoms/loading";
import { MarketChart } from "../common/types";
import { LineChart } from "react-native-chart-kit";
import Swiper from "react-native-swiper";

type MarketGraphProps = {
  coinId: string;
};

type ChartRange = {
  days: number;
  title: string;
  key: number;
};

const CHART_DAY_OPTIONS = [
  {
    days: 1,
    title: "Last Day",
  },
  {
    days: 7,
    title: "Last Week",
  },
  {
    days: 30,
    title: "Last Month",
  },
  //   {
  //     days: 365,
  //     title: "Last Year",
  //   },
].map((o, i) => ({
  ...o,
  key: i,
}));

export const MarketGraph: React.FC<MarketGraphProps> = ({ coinId }) => {
  const [chartIndex, setChartIndex] = React.useState(1);
  const dims = useWindowDimensions();
  const height = dims.height / 2;
  const chartOptions = CHART_DAY_OPTIONS[chartIndex];
  return (
    <>
      {<Text>{chartOptions.title}</Text>}
      <ChartData
        width={dims.width}
        coinId={coinId}
        chartOptions={chartOptions}
        height={height}
      />
    </>
  );
};

const firstAndLast = (arr: any[]) => [arr[0], arr[arr.length - 1]];

export const ChartData: React.FC<{
  width: number;
  height: number;
  coinId: string;
  chartOptions: ChartRange;
}> = ({ coinId, height, chartOptions, width }) => {
  const { data, isLoading } = useMarketChartQuery({
    coinId,
    days: chartOptions.days,
  });

  return (
    <>
      {isLoading && !data && <Loading />}
      {data && (
        <>
          <LineChart
            data={{
              labels: firstAndLast(
                data.prices.map((p) => new Date(p[0]).toLocaleDateString())
              ),
              datasets: [
                {
                  data: data.prices.map((p) => p[1]),
                },
              ],
            }}
            width={width}
            height={height}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              title: chartOptions.title,
              //   backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              margin: 8,
            }}
          />
        </>
      )}
    </>
  );
};
