import React from "react";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./services/state";
import { Platform } from "react-native";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { ThemeProvider } from "@rneui/themed";
import * as SplashScreen from 'expo-splash-screen';

const persistor = persistStore(store);

export const App = () => {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000)
  
  const ctx = require.context("./app");
  React.useEffect(() => {
    if (__DEV__ && Platform.OS !== "web") {
      const rt = require("./services/reactotron").initReactotron;
      rt();
    }
  }, []);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ExpoRoot context={ctx} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

registerRootComponent(App);
