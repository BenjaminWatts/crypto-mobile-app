import React from "react";
import { useRouter } from "expo-router";
import { urls } from "../services/nav";
import {
  BackIcon,
  ClearFavouritesRubbishIcon,
  HeaderSearchIcon,
} from "./buttons";
import { Header } from "@rneui/themed";
import { CoinDetail } from "../common/types";
import { ToggleFavourite } from "../components/ToggleFavourite";
import { useAppDispatch } from "../services/state";
import { clearFavourites } from "../services/state/favourites";

const textColor = "#fff";

const textStyles = {
  color: textColor,
  fontSize: 20,
};

type HomeHeaderProps = {
  toSearch: () => void;
};
export const HomeHeader: React.FC<HomeHeaderProps> = ({ toSearch }) => {
  return (
    <Header
      centerComponent={{ text: "Latest Prices", style: textStyles }}
      rightComponent={<HeaderSearchIcon onPress={toSearch} />}
    />
  );
};

type FavouritesHeaderProps = {};
export const FavouritesHeader: React.FC<FavouritesHeaderProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <Header
      centerComponent={{ text: "Favourites", style: textStyles }}
      rightComponent={
        <ClearFavouritesRubbishIcon
          onPress={() => dispatch(clearFavourites())}
        />
      }
    />
  );
};

export const SearchHeader = () => {
  return (
    <Header
      leftComponent={<BackIcon />}
      centerComponent={{ text: "Search", style: textStyles }}
    />
  );
};

type InformationHeaderProps = {
  data?: CoinDetail;
};
export const InformationHeader: React.FC<InformationHeaderProps> = ({
  data,
}) => {
  return (
    <Header
      leftComponent={<BackIcon />}
      centerComponent={{
        text: data ? data.name : "Loading",
        style: textStyles,
      }}
      rightComponent={
        data ? (
          <ToggleFavourite
            favourite={{
              id: data.id,
              name: data.name,
              image_thumb: data.image.thumb,
            }}
          />
        ) : undefined
      }
    />
  );
};
