import React from "react";
import Reactotron from "reactotron-react-native";

export const initReactotron = () => {
  console.log("Reactotron");
  Reactotron.configure({
    name: "name",
    host: "0.0.0.0",
  })
    .useReactNative({})
    .connect();
};
