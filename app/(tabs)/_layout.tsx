import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { FavouritesHeader, HomeHeader } from "../../atoms/headers";
import { urls } from "../../services/nav";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  testID?: string;
}) {
  return (
    <FontAwesome
      testID={props.testID}
      size={28}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        header: () => null,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          header: () => (
            <HomeHeader toSearch={() => router.push(urls.search)} />
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon testID="home-tab-icon" name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          header: () => <FavouritesHeader />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              testID="favourites-tab-icon"
              name="star"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
