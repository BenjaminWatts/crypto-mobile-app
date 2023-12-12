import React from "react";
import {
  isFavourite,
  removeFavourite,
  addFavourite,
  Favourite,

} from "../services/state/favourites";
import { useAppDispatch, useAppSelector } from "../services/state";
import CheckBox from "@react-native-community/checkbox";
import { log } from "../services/log";

type ToggleFavouriteProps = {
  favourite: Favourite;
};

export const ToggleFavourite: React.FC<ToggleFavouriteProps> = ({
  favourite,
}) => {
  log.debug(`ToggleFavourite: ${favourite.id}`);
  const selected = useAppSelector((state) =>
    isFavourite(state, favourite.id)
  );
  const dispatch = useAppDispatch();

  return (
    <CheckBox
      value={selected}
      onValueChange={(isFav) => {
        if (!isFav) {
          dispatch(removeFavourite(favourite.id));
        } else {
          dispatch(addFavourite(favourite));
        }
      }}
    />
  );
};
