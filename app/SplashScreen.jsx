import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import splash from "../assets/images/splash.png";
import { Drawer } from "expo-router/drawer";

export default function SplashScreen() {
  return (
    <View>
      <Drawer.Screen
        options={
          {
            // title: "Hello",
            // drawerActiveTintColor: "red",
            // drawerLabel:false
          }
        }
      />

      <Image
        style={{
          height: Dimensions.get("screen").height - 105,
          width: Dimensions.get("screen").width,
        }}
        source={splash}
      />
    </View>
  );
}
