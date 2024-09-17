import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="UserLogin"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

{
  /* <Tabs>
  <Tabs.Screen
    name="HomePage2"
    options={{
      tabBarLabel: "Home",
    }}
  />
</Tabs>; */
}
