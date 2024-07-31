import { View, Text, FlatList, Image, Dimensions, ScrollView, Pressable } from "react-native";
import React from "react";
import hotel from "../assets/images/hotel.png";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function DetailTicket() {
  const bookedList = [
    {
      id: 1,
      Id: "INV1273436347",
      btn: "Will Come",
      img: hotel,
      hotelName: "The Lalit New Delhi",
      Address: "Uttar Pradesh,India",
      rating: "4.4",
      review: "(41 Review)",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <FlatList
        data={bookedList}
        contentContainerStyle={{ paddingHorizontal: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                gap: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.Id}</Text>
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
            </View>
          );
        }}
        scrollEnabled={false}
      />
      <View style={{ padding: 30, gap: 18 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Customer Info</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Name</Text>
          <Text style={{ fontSize: 16 }}>Rohit Kumar</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>E-mail</Text>
          <Text style={{ fontSize: 16 }}>rohit12345@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Payment</Text>
          <Text style={{ fontSize: 16 }}>Mastercard</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Status</Text>
          <Text style={{ fontSize: 16, color: "green" }}>Success</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "500", marginTop: 10 }}>
          Order Info
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>length of stay</Text>
          <Text style={{ fontSize: 16 }}>3 days 2 nights</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Check In</Text>
          <Text style={{ fontSize: 16 }}>June 12, 2022</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Check Out</Text>
          <Text style={{ fontSize: 16 }}>June 14, 2022</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Type Room</Text>
          <Text style={{ fontSize: 16 }}>Presidential Suite</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, gap: 18 }}>
        <View
          style={{
            height: 1,
            width: Dimensions.get("window").width - 50,
            backgroundColor: "grey",
            alignSelf: "center",
          }}
        ></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Total</Text>
          <Text style={{ fontSize: 18 ,fontWeight:"600"}}>$320</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Code Promo</Text>
          <Text style={{ fontSize: 18 ,fontWeight:"600"}}>HEZORKS</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Promo</Text>
          <Text style={{fontSize: 18 ,color:"red"}}>-$20</Text>
        </View>
        <View
          style={{
            height: 1,
            width: Dimensions.get("window").width - 50,
            backgroundColor: "grey",
            alignSelf: "center",
          }}
        ></View>
        <View style={{gap:60}}>
            <View style={{ flexDirection: "row",justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, color: "grey" }}>Total Pay</Text>
          <Text style={{fontSize: 18 ,fontWeight:"600"}}>$300</Text>
          </View>
          <View style={{ alignItems: "center",marginBottom:30}}>
          <Pressable
            style={{
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "skyblue",
              width: Dimensions.get("screen").width - 50,
              paddingVertical: 20,
              backgroundColor:"skyblue"
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Download PDF
            </Text>
          </Pressable>
        </View>
        </View>
      </View>
    </ScrollView>
  );
}
