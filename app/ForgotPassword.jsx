import { View, Text, Dimensions, TextInput, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function ForgotPassword() {
  return (
    <View
      style={{
        padding: 30,
        gap: 20,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          width: Dimensions.get("screen").width - 60,
          borderRadius: 12,
          padding: 15,
          marginTop: 10,
          borderWidth: 1,
          borderColor: "#e1e1e0",
          backgroundColor: "#e1e1e0",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
        }}
      >
        <Entypo name="warning" size={24} color="grey" />
        <Text style={{ fontSize: 12, fontWeight: "500" }}>
          We will send the OTP code to your email{"\n"}for security in
          forgetting your password
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, color: "grey" }}>E-mail</Text>
        <View
          style={{
            width: Dimensions.get("screen").width - 60,
            borderRadius: 50,
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#3366ff",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: "white",
              height: 30,
              width: 230,
            }}
            placeholderTextColor="grey"
            placeholder="E-mail"
          />
        </View>
      </View>

      <View style={{ alignItems: "center", top: 380 }}>
        <Pressable
          style={{
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "skyblue",
            backgroundColor: "skyblue",
            width: Dimensions.get("screen").width - 50,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              color: "#ffff",
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
