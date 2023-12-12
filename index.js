import React from "react";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import {Provider} from 'react-redux'
import {store} from './services/state'
import { Platform } from "react-native";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  React.useEffect(() => {
    if(__DEV__ && Platform !== 'web') {
      const rt = require('./services/reactotron').initReactotron
      rt()
    }
  })
  return (
    <Provider store={store}>
      <ExpoRoot context={ctx} />
    </Provider>
  );
}

registerRootComponent(App);
