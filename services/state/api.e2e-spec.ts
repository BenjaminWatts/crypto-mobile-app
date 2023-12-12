import React from "react";
import "@testing-library/jest-dom";
import {store} from '.'
import { geckoApi } from "./api";
import { CoinDetail, CoinListItem as CoinListItem, MarketChart } from "../../common/types";

const coinId = 'bitcoin' // chemix
const days = 1

const validateCoin = (coin: CoinListItem) => {
    expect(typeof coin.id).toBe('string');
    expect(typeof coin.symbol).toBe('string');
    expect(typeof coin.name).toBe('string');
    expect(typeof coin.image).toBe('string');
    expect(typeof coin.current_price).toBe('number');
    expect(typeof coin.market_cap).toBe('number');
    expect(typeof coin.market_cap_rank).toBe('number');
    expect(typeof coin.total_volume).toBe('number');
    expect(typeof coin.price_change_percentage_24h).toBe('number');
    expect(typeof coin.last_updated).toBe('string');
}

const validateDetail = (coin: CoinDetail) => {
    expect(typeof coin.id).toBe('string');
    expect(typeof coin.name).toBe('string');
    expect(typeof coin.description.en).toBe('string');
    expect(typeof coin.image.thumb).toBe('string');
    expect(typeof coin.image.small).toBe('string');
    expect(typeof coin.image.large).toBe('string');
    expect(typeof coin.genesis_date).toBe('string');

    expect(typeof coin.market_data.current_price.usd).toBe('number');
    expect(typeof coin.market_data.market_cap.usd).toBe('number');
    expect(typeof coin.market_data.total_volume.usd).toBe('number');
    expect(typeof coin.market_data.high_24h.usd).toBe('number');
    expect(typeof coin.market_data.low_24h.usd).toBe('number');
    expect(typeof coin.market_data.price_change_24h).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_24h).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_7d).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_14d).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_30d).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_60d).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_200d).toBe('number');
    expect(typeof coin.market_data.price_change_percentage_1y).toBe('number');
    expect(typeof coin.last_updated).toBe('string');

}

const validateMarketChart = (chart: MarketChart) => {
    expect(Array.isArray(chart.prices)).toBe(true);
    expect(Array.isArray(chart.market_caps)).toBe(true);
    expect(Array.isArray(chart.total_volumes)).toBe(true);
}

describe("geckoApi", () => {

    test('getAllCryptos and check data has expected fields', async() => {
        const result = await store.dispatch(geckoApi.endpoints.getCryptos.initiate({page: 1, perPage: 50}));
        if(!result.data) {
            throw new Error('No data returned');
        }
        for (const coin of result.data) {
            validateCoin(coin);
        }
    })

    test('getCrypto and check data has expected fields', async() => {
        const result = await store.dispatch(geckoApi.endpoints.getCrypto.initiate({coinId}));
        if(!result.data) {
            throw new Error('No data returned');
        }
        validateDetail(result.data);
    })

    test('marketChart can fetch a price chart series with expected fields', async() => {
        const result = await store.dispatch(geckoApi.endpoints.marketChart.initiate({coinId, days}));
        if(!result.data) {
            throw new Error('No data returned');
        }
        validateMarketChart(result.data);
    })

});
