import { FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import React from "react";

type ButtonProps = {
  onPress: () => void;
};

const headerIconSize = 20;

export const HeaderSearchIcon: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <Button
      type="clear"
      icon={<FontAwesome name="search" size={headerIconSize} />}
      onPress={onPress}
    />
  );
};

export const HeaderFavouriteSelectable: React.FC<
  ButtonProps & {
    selected: boolean;
  }
> = ({ onPress, selected }) => {
  return (
    <Button
      type='clear'
      icon={
        <FontAwesome
          name={selected ? "star" : "star-o"}
          size={headerIconSize}
        />
      }
      onPress={onPress}
    />
  );
};
