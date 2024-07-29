import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import card1 from "../assets/images/img1.jpg";
import card2 from "../assets/images/img2.jpg";
import card3 from "../assets/images/img3.jpg";
import card4 from "../assets/images/img4.jpg";
import card5 from "../assets/images/img5.jpg";
import card6 from "../assets/images/img6.jpg";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function MyWishlist() {
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
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          // flexDirection: "row",
          // flexWrap: "wrap",
          gap: 20,
          padding: 20,
          // backgroundColor:"white"
        }}
        numColumns={2}
        data={Wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ marginRight: 18 }}>
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
          );
        }}
      />
    </View>
  );
}
