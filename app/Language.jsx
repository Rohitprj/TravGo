import { View, Text, Dimensions, Switch, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

export default function Language() {
  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 40,
          backgroundColor: "white",
          height: Dimensions.get("window").height,
          gap:30
        }}
      >
        <View
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#e3e7ec",
            borderRadius: 10,
            gap: 18,
          }}
        >
          <Text style={{ fontWeight: "500", color: "grey" }}>
            Suggested Languages
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Hindi</Text>
            <AntDesign name="checksquareo" size={24} color="black" style={{}}/>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>English</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>English (UK)</Text>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#e3e7ec",
            borderRadius: 10,
            gap: 18,
          }}
        >
          <Text style={{ fontWeight: "500", color: "grey" }}>
            Other Languages
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Chinese</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Croatian</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Czech</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Danish</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Filipino</Text>
          </View>
          <View
            style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Finland</Text>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
}
