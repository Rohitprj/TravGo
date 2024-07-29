import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import NewAddress from "../components/NewAddress";

export default function MyAdderss() {
  return (
    <View style={{ paddingHorizontal: 30, paddingVertical: 50 }}>
      <Link href={NewAddress} style={{ alignSelf: "flex-end" }}>
        <Octicons name="diff-added" size={30} color="grey" />
      </Link>

      <View style={{ gap: 18 }}>
        <View style={{ gap: 8 }}>
          <View style={{ gap: 2 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Rohit Kumar</Text>
            <Text style={{ fontSize: 16, color: "grey" }}>+1234567890</Text>
          </View>
          <View style={{ gap: 2 }}>
            <Text style={{ fontSize: 16, color: "grey" }}>
              705 c/2 ward no3
            </Text>
            <Text style={{ fontSize: 16, color: "grey" }}>
              New Delhi, India
            </Text>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Pressable
              style={{
                borderRadius: 13,
                borderWidth: 2,
                borderColor: "skyblue",
                width: Dimensions.get("screen").width - 220,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  color: "skyblue",
                  alignSelf: "center",
                  justifyContent: "center",
                  // fontSize: 20,
                }}
              >
                Change Adderss
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <View style={{ gap: 2 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Rohit Kumar</Text>
            <Text style={{ fontSize: 16, color: "grey" }}>+1234567890</Text>
          </View>
          <View style={{ gap: 2 }}>
            <Text style={{ fontSize: 16, color: "grey" }}>
              705 c/2 ward no3
            </Text>
            <Text style={{ fontSize: 16, color: "grey" }}>
              New Delhi, India
            </Text>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Pressable
              style={{
                borderRadius: 13,
                borderWidth: 2,
                borderColor: "skyblue",
                width: Dimensions.get("screen").width - 220,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  color: "skyblue",
                  alignSelf: "center",
                  justifyContent: "center",
                  // fontSize: 20,
                }}
              >
                Change Adderss
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center", top: 160 }}>
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
            Select Address
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
