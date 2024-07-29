import { View, Text, Dimensions, TextInput, Pressable } from "react-native";
import React from "react";

export default function ChangePassword() {
  return (
    <View style={{ padding: 30, gap: 20 ,backgroundColor:"#ffffff",height:Dimensions.get("window").height}}>
      <Text style={{ fontSize: 20 }}>
        The new password must be different from the current password
      </Text>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
          Password
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width - 60,
            borderRadius: 50,
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#e6e6e6",
            backgroundColor: "#e6e6e6",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              height: 30,
              width: 270,
              fontWeight: "600",
            }}
            placeholderTextColor="grey"
            placeholder="Enter your Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{ color: "green" }}>
          There must be at least 8 characters
        </Text>
        <Text style={{ color: "green" }}>
          There must be a unique code like @!#
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
          Confirm Password
        </Text>
        <View
          style={{
            width: Dimensions.get("screen").width - 60,
            borderRadius: 50,
            padding: 10,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#e6e6e6",
            backgroundColor: "#e6e6e6",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              height: 30,
              width: 270,
              fontWeight: "600",
            }}
            placeholderTextColor="grey"
            placeholder="Confirm your Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={{ alignItems: "center",top:200}}>
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
