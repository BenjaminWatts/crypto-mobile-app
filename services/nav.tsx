import {Link} from 'expo-router'

export const urls = {
    home: '/',
    favourites: '/favourites',
    coin: (coinId: string) => `/coin/${coinId}`,
    search: `/search`,
}
