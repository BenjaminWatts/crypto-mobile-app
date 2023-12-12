import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { log } from "../log";

export type Favourite = {
  id: string;
  name: string;
};

type FavouritesState = {
  favourites: Favourite[];
}

const initialState: FavouritesState = {
  favourites: []
}

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Favourite>) => {
      log.debug("addFavourite", action.payload.id);
      state.favourites = [
        ...state.favourites,
        action.payload
      ]
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      log.debug("removeFavourite", action.payload);
      state.favourites = state.favourites.filter((f) => f.id !== action.payload);
    },
  },
  selectors: {
    getFavourites: (state) => {
      log.debug("getFavourites");
      log.debug(`now ${state.favourites.length} favourites`)
      return state.favourites;
    },
    isFavourite: (state, id: string) => {
      for (const f of state.favourites) {
        if (f.id === id) {
          return true;
        }
      }
      return false;
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const { getFavourites, isFavourite } = favouritesSlice.selectors;
