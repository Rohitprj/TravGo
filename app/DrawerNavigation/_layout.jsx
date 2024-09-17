import { View, Text, LogBox, Image, ScrollView } from "react-native";
import React from "react";
const user = require("@/assets/images/user.png");
import drawer, { Drawer } from "expo-router/drawer";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../HomePage";
import { Link, Tabs } from "expo-router";

export default function _layout() {
  return (
    <Drawer
      screenOptions={({ route }) => ({
        headerTitle: route.name === "index" ? "" : "",
        headerStyle: {
          backgroundColor: "#2196f3",
        },
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="dark-mode"
              size={32}
              color="white"
              style={{ marginRight: 15 }}
            />
            <Link href="./userLogin" style={{ marginRight: 20 }}>
              <FontAwesome6 name="user" size={28} color="white" />
            </Link>
          </View>
        ),
      })}
    ></Drawer>

    //  <Drawer.Screen
    //   name="SearchDestination"
    //   options={{
    //     drawerLabel: "SearchDestination",
    //     title: "Destination",
    //   }}
    // />
  );
}