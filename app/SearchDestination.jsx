import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import card1 from "../assets/images/img1.jpg";
import card2 from "../assets/images/img2.jpg";
import card3 from "../assets/images/img3.jpg";
import card4 from "../assets/images/img4.jpg";
import card5 from "../assets/images/img5.jpg";
import card6 from "../assets/images/img6.jpg";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function SearchDestination() {
  const Wishlist = [
    {
      id: 1,
      img: card1,
      PlaceName: "Place1",
      PlaceAdd: "Polynesia,French",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
    {
      id: 2,
      img: card2,
      PlaceName: "Place2",
      PlaceAdd: "South America",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
    {
      id: 3,
      img: card3,
      PlaceName: "Place3",
      PlaceAdd: "Hawaii",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
    {
      id: 4,
      img: card4,
      PlaceName: "Place4",
      PlaceAdd: "Germany",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
    {
      id: 5,
      img: card5,
      PlaceName: "Place5",
      PlaceAdd: "America",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
    {
      id: 6,
      img: card6,
      PlaceName: "Place6",
      PlaceAdd: "Russia",
      PlacePrice: "$235",
      PlaceRating: "4.5",
    },
  ];
  const TabList = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Popular",
    },
    {
      id: 3,
      title: "Recomendations",
    },
    {
      id: 4,
      title: "Frequently Visited",
    },
  ];
  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
      <View
        style={{
          width: Dimensions.get("screen").width - 42,
          backgroundColor: "#d7d9db",
          borderRadius: 50,
          padding: 10,
          borderWidth: 1,
          borderColor: "#d7d9db",
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
            borderColor: "#d7d9db",
            height: 30,
            width: 230,
          }}
          placeholderTextColor="grey"
          placeholder="Search...."
        />
      </View>
      <FlatList
        contentContainerStyle={{ gap: 15, paddingVertical: 20 }}
        data={TabList}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "grey",
                padding: 5,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 40,
        }}
        numColumns={2}
        data={Wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Link style={{ marginRight: 18 }} href={"VacationDetails"}>
              <View>
                <Image
                  source={item.img}
                  style={{ height: 150, width: 150, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 18 }}>{item.PlaceName}</Text>

                <View
                  style={{ flexDirection: "row", gap: 8, paddingVertical: 4 }}
                >
                  <FontAwesome6 name="location-dot" size={14} color="grey" />
                  <Text style={{ color: "grey", fontSize: 12 }}>
                    {item.PlaceAdd}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    paddingVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: 600 }}>
                    {item.PlacePrice}
                  </Text>

                  <View style={{ gap: 5, flexDirection: "row" }}>
                    <AntDesign name="star" size={16} color="#e3d005" />
                    <Text style={{ color: "#e3d005" }}>{item.PlaceRating}</Text>
                  </View>
                </View>
              </View>
            </Link>
          );
        }}
      />
    </ScrollView>
  );
}
