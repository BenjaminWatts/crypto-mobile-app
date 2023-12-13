import React from "react";
import {
  isFavourite,
  removeFavourite,
  addFavourite,
  Favourite,
} from "../services/state/favourites";
import { useAppDispatch, useAppSelector } from "../services/state";
import { log } from "../services/log";
import { HeaderFavouriteSelectable } from "../atoms/buttons";

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
    <HeaderFavouriteSelectable
      selected={selected}
      onPress={() => {
        if (!selected) {
          dispatch(addFavourite(favourite));
        } else {
          dispatch(removeFavourite(favourite.id));
        }
      }}
    />
  )

};
