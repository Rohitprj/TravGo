import { View, Text, LogBox } from "react-native";
import React from "react";
import drawer, { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "./HomePage";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Drawer>
      {/* <Drawer.Screen
        name="SearchDestination"
        options={{
          drawerLabel: "SearchDestination",
          title: "Destination",
        }}
      /> */}
    </Drawer>
  );
}
