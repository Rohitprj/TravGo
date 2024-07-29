import { View, Dimensions, TextInput, Pressable, Text } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function HelpSupport() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "white",
          height: Dimensions.get("window").height,
          padding: 30,
        }}
      >
        <View
          style={{
            width: Dimensions.get("screen").width - 60,
            backgroundColor: "#f5f5f0",
            borderRadius: 50,
            padding: 10,
            marginTop:20,
            marginBottom: 40,
            borderWidth: 1,
            borderColor: "#f5f5f0",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={22} color="grey" />
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "500",
              borderWidth: 1,
              borderColor: "#f5f5f0",
              height: 30,
              width: 230,
            }}
            placeholderTextColor="grey"
            placeholder="Search...."
          />
        </View>

        <View style={{gap:30}}>
          <Pressable
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              How do I reset my password?
            </Text>
            <Entypo name="chevron-down" size={22} color="black" />
          </Pressable>

          <View
            style={{ height: 1, width: 300, backgroundColor: "#e3e7ec" }}
          ></View>

          <Pressable
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              I forgot my password, What should I do?
            </Text>
            <Entypo name="chevron-down" size={22} color="black" />
          </Pressable>

          <View
            style={{ height: 1, width: 300, backgroundColor: "#e3e7ec" }}
          ></View>

          <Pressable
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              I forgot my password, What should I do?
            </Text>
            <Entypo name="chevron-down" size={22} color="black" />
          </Pressable>

          <View
            style={{ height: 1, width: 300, backgroundColor: "#e3e7ec" }}
          ></View>

          <Pressable
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              I forgot my password, What should I do?
            </Text>
            <Entypo name="chevron-down" size={22} color="black" />
          </Pressable>

          <View
            style={{ height: 1, width: 300, backgroundColor: "#e3e7ec" }}
          ></View>

          <Pressable
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              I forgot my password, What should I do?
            </Text>
            <Entypo name="chevron-down" size={22} color="black" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
