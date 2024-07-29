import { View, Text } from "react-native";
import React from "react";
import drawer, { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "./HomePage";
import { Tabs } from "expo-router";

export default function _layout() {
  // const Drawer = createDrawerNavigator()
  return (
    // <Tabs />
    <Drawer />
  );
}
