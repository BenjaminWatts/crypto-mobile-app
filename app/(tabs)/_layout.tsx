import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { FavouritesHeader, HomeHeader } from "../../atoms/headers";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  testID?: string;
}) {
  return <FontAwesome testID={props.testID} size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: HomeHeader,
          tabBarIcon: ({ color }) => <TabBarIcon testID='home-tab-icon' name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          header: FavouritesHeader,
          tabBarIcon: ({ color }) => <TabBarIcon testID='favourites-tab-icon' name="star" color={color} />,
        }}
      />
    </Tabs>
  );
}
