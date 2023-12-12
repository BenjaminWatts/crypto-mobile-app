import React from "react";
import { Card, Text } from "@rneui/themed";
import formatters from "../services/formatters";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

const containerStyle = {
  margin: 5,
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <Card
    containerStyle={containerStyle}
  >
    <Card.Title>{title}</Card.Title>
    {children}
  </Card>
);

type PricesCardProps = {
  current_price: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_1y: number;
};

export const PricesCard: React.FC<PricesCardProps> = ({
  current_price,
  price_change_percentage_7d,
  price_change_percentage_30d,
  price_change_percentage_1y,
}) => {
  return (
    <Card containerStyle={containerStyle}>
      <Card.Title>Price Trends</Card.Title>
      <Card.Divider />

      <Text>Current Price: {formatters.priceUsd(current_price)}</Text>
      <Text>
        Change in past week: {formatters.percentage(price_change_percentage_7d)}
      </Text>
      <Text>
        Change in past 30 days: 
        {formatters.percentage(price_change_percentage_30d)}
      </Text>
      <Text>
        Change in past year: {formatters.percentage(price_change_percentage_1y)}
      </Text>
    </Card>
  );
};

type DescriptionCardProps = {
  descriptionHtml?: string;
};
export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  descriptionHtml,
}) => {
  const width = useWindowDimensions().width;
  return (
    <Card containerStyle={containerStyle}>
      <Card.Title>Description</Card.Title>
      <Card.Divider />
      {
        descriptionHtml ? (<RenderHtml
          contentWidth={width}
          source={{
            html: descriptionHtml,
          }}
        />) : (<Text>No description available</Text>)
      }
    </Card>
  );
};

export const NoResultsFound = () => {
  return (
    <Card>
      <Card.Title>No results found</Card.Title>
    </Card>
  )
}