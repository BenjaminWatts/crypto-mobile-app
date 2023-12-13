import React from "react";
import { Stack } from "expo-router";
import { log } from "../services/log";

export default function RootLayout() {
  log.debug(`app/_layout`);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          header: () => null,
        }}
      />
    </Stack>
  );
}
