import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import { Alert, Platform } from "react-native";

const msg = "Unable fetch data from the Coingecko api. ";

export const ApiError = (refetch: () => void) => {
  if (Platform.OS === "web") {
    alert(msg);
  } else {
    Alert.alert("Error", msg, [
      {
        text: "Retry",
        onPress: () => refetch(),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  }
};
