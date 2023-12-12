import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Information } from "../../components/Information";
import { ScrollView } from "react-native-gesture-handler";
import { MarketGraph } from "../../components/MarketChart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function ModalScreen() {
  const { id } = useGlobalSearchParams();

  return (
    <>
      <ScrollView>
        <MarketGraph coinId={id as string} />
        <Information coinId={id as string} />
      </ScrollView>
    </>
  );
}
