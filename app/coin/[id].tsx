import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Information } from "../../components/Information";
import { ScrollView } from "react-native-gesture-handler";
import { MarketGraph } from "../../components/MarketChart";
import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InformationHeader } from "../../atoms/headers";

const Tab = createBottomTabNavigator();

export default function ModalScreen() {
  const { id } = useGlobalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <InformationHeader />,
        }}
      />

      <ScrollView>
        <MarketGraph coinId={id as string} />
        <Information coinId={id as string} />
      </ScrollView>
    </>
  );
}
