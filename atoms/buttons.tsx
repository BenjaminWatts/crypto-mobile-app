import { FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { useRouter } from "expo-router";
import React from "react";


type ButtonProps = {
  onPress: () => void;
};

const headerIconSize = 20;

const iconColor = "#fff";

export const HeaderSearchIcon: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <Button
      testID='search-icon'
      type="clear"
      icon={<FontAwesome name="search" size={headerIconSize}  color={iconColor}/>}
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
      testID='favourite-icon'
      type='clear'
      icon={
        <FontAwesome
          name={selected ? "star" : "star-o"}
          color={iconColor}
          size={headerIconSize}
        />
      }
      onPress={onPress}
    />
  );
};

export const BackIcon: React.FC = () => {
  const router = useRouter();
  const onPress = () => router.back();
  return (
    <Button
      type="clear"
      testID='back-icon'
      icon={<FontAwesome name="arrow-left" size={headerIconSize} color={iconColor} />}
      onPress={onPress}
    />
  );
}


export const ClearFavouritesRubbishIcon: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <Button
      type="clear"
      testID='clear-favourites-icon'
      icon={<FontAwesome name="trash" size={headerIconSize} color={iconColor} />}
      onPress={onPress}
    />
  );
}