import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { urls } from "../../services/nav";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

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
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <FontAwesome.Button
              name="search"
              size={20}
              // backgroundColor="transparent"
              underlayColor="transparent"
              activeOpacity={0.3}
              onPress={() => {
                router.push(urls.search);
              }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </Tabs>
  );
}
