import React from "react";
import { Search } from "../components/Search";
import { log } from "../services/log";
import { useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SearchHeader } from "../atoms/headers";

export default function SearchScreen() {
  log.debug(`SearchScreen`);
  return (
    <>
      <Stack.Screen
        options={{
          title: "Search",
          header: SearchHeader,
        }}
      />
      <Search />
    </>
  );
}
