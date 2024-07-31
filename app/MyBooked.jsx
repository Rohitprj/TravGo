import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import tajMahal from "../assets/images/tajMahal.jpg";
import hotel from "../assets/images/hotel.png";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function MyBooked() {
  const bookedList = [
    {
      id: 1,
      date: "22 March 2022,Thu",
      btn: "Will Come",
      img: hotel,
      hotelName: "The Lalit New Delhi",
      Address: "Uttar Pradesh,India",
      rating: "4.4",
      review: "(41 Review)",
      Price: "Total Price",
      dollar: "$320",
      detailPg: "Detail",
    },
    {
      id: 2,
      date: "22 March 2022,Thu",
      btn: "Will Come",
      img: tajMahal,
      hotelName: "Taj Mahal",
      Address: "Uttar Pradesh,India",
      rating: "4.4",
      review: "(41 Review)",
      Price: "Total Price",
      dollar: "$320",
      detailPg: "Detail",
      active: true,
    },
    {
      id: 3,
      date: "22 March 2022,Thu",
      btn: "Will Come",
      img: hotel,
      hotelName: "The Lalit New Delhi",
      Address: "Uttar Pradesh,India",
      rating: "4.4",
      review: "(41 Review)",
      Price: "Total Price",
      dollar: "$320",
      detailPg: "Detail",
    },
  ];

  return (
    <ScrollView style={{ padding: 30 }}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Pressable
          style={{
            backgroundColor: "#3385ff",
            borderColor: "#3385ff",
            borderWidth: 2,
            borderRadius: 50,
            height: 40,
            width: 140,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              color: "white",
            }}
          >
            Booked
          </Text>
        </Pressable>
        <Pressable
          style={{
            height: 40,
            width: 140,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            History
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={bookedList}
        contentContainerStyle={{ gap: 30, paddingVertical: 40 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                gap: 20,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "grey", fontSize: 12 }}>{item.date}</Text>
                <Text
                  style={{
                    fontSize: 13,
                    backgroundColor: "#ffebe9",
                    textAlign: "center",
                    color: "#ff6666",
                    borderWidth: 2,
                    borderColor: "#ffebe9",
                    paddingVertical: 2,
                    paddingHorizontal: 10,
                    borderRadius: 20,
                  }}
                >
                  {item.btn}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 15 }}>
                <Image
                  style={{
                    height: 80,
                    width: 90,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                  source={item.img}
                />
                <View style={{}}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>
                    {item.hotelName}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="location-pin" size={20} color="grey" />
                    <Text style={{ color: "grey", fontSize: 13 }}>
                      {item.Address}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5, marginTop: 15 }}>
                    <AntDesign name="star" size={15} color="#ffcc00" />
                    <Text style={{ color: "#ffcc00" }}>{item.rating}</Text>
                    <Text style={{ color: "grey" }}>{item.review}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: "grey" }}>{item.Price}</Text>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>
                    {item.dollar}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "#3385ff",
                    borderWidth: 1,
                    borderRadius: 40,
                    padding: 12,
                    paddingHorizontal: 45,
                  }}
                >
                  <Link href={"DetailTicket"}>
                    <Text style={{ fontSize: 16, color: "#3385ff" }}>
                      {item.detailPg}
                    </Text>
                  </Link>
                </View>
              </View>
            </View>
          );
        }}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}
