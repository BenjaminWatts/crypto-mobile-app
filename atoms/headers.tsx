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

export const HomeHeader = () => {
  const router = useRouter();
  return (
    <Header
      centerComponent={{ text: "Latest Prices", style: textStyles }}
      rightComponent={
        <HeaderSearchIcon
          onPress={() => {
            router.push(urls.search);
          }}
        />
      }
    />
  );
};

export const FavouritesHeader = () => {
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
