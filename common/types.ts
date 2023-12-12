export type CoinListItem = {
  market_cap_rank: number;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  id: string;
  last_updated: string;
};

type Prices = {
  usd: number;
};

export type CoinDetail = {
  id: string;
  name: string;
  description: {
    en: string; // html
  };
  image: {
    // urls
    thumb: string;
    small: string;
    large: string;
  };
  genesis_date: string; // format YYYY-MM-DD
  
  market_cap_rank: number;
  market_data: {
    current_price: Prices;
    market_cap: Prices;
    total_volume: Prices;
    high_24h: Prices;
    low_24h: Prices;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
  };
  last_updated: string;
};

export type MarketChart = {
  prices: Array<Array<number>>;
  market_caps: Array<Array<number>>;
  total_volumes: Array<Array<number>>;
}

export type CoinSearchResult = {
  id: string;
  name: string;
  api_symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
} 