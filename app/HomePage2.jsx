import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import boy from "../assets/images/boy.png";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Hotel from "../assets/images/Hotel2.png";
import airport from "../assets/images/airport.png";
import carRental from "../assets/images/car-rental.png";
import category from "../assets/images/category.png";
import card1 from "../assets/images/img1.jpg";
import card2 from "../assets/images/img2.jpg";
import pic1 from "../assets/images/profile1.jpg";
import pic2 from "../assets/images/profile2.jpg";
import { ScrollView } from "react-native-gesture-handler";

export default function HomePage2() {
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
  ];
  const tourGuide = [
    {
      id: 1,
      img: pic1,
      Name: "Rohit Kumar",
      Price: "$25(1Day)",
      location: "Delhi,India",
    },
    {
      id: 2,
      img: pic2,
      Name: "Rohit Prajapat",
      Price: "$30(1Day)",
      location: "Delhi,India",
    },
  ];
  const BudgetTour = [
    {
      id: 1,
      img: pic1,
      Name: "Rohit Kumar",
      days: "3 days 2 night",
      location: "Delhi,India",
      Price: "$25/Person",
    },
    {
      id: 2,
      img: pic2,
      Name: "Rohit kumar",
      days: "5 days 4 night",
      location: "Delhi,India",
      Price: "$30/Person",
    },
  ];
  return (
    <ScrollView
      style={{
        paddingHorizontal: 25,
        backgroundColor: "white",
      }}
    >
      <View style={{ gap: 20, paddingVertical: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <Image style={{ height: 50, width: 50 }} source={boy} />
            <View style={{}}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>Hi, Rohit</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <FontAwesome6 name="location-dot" size={14} color="grey" />
                <Text>India</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <Ionicons name="notifications-outline" size={28} color="black" />
            </View>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={28}
                color="black"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: Dimensions.get("screen").width - 60,
            backgroundColor: "#f5f5f0",
            borderRadius: 50,
            padding: 10,
            marginTop: 10,
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

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 16,
                backgroundColor: "#f5f5f0",
              }}
            >
              <Image source={airport} />
            </View>
            <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
              Airpot
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 16,
                backgroundColor: "#f5f5f0",
              }}
            >
              <Image source={carRental} />
            </View>
            <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
              Rental
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 16,
                backgroundColor: "#f5f5f0",
              }}
            >
              <Image source={Hotel} />
            </View>
            <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
              Hotel
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: "#f5f5f0",
                borderWidth: 2,
                borderRadius: 50,
                padding: 16,
                backgroundColor: "#f5f5f0",
              }}
            >
              <Image source={category} />
            </View>
            <Text style={{ textAlign: "center", fontSize: 16, color: "grey" }}>
              More
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginTop: 10,
          }}
        >
          Frequently visited
        </Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            gap: 5,
          }}
          data={Wishlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 18 }}>
                <Image
                  source={item.img}
                  style={{ height: 135, width: 135, borderRadius: 10 }}
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
          horizontal
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 600 }}>Tour Guide</Text>
          <Text style={{ color: "skyblue", alignSelf: "center", fontSize: 16 }}>
            See All
          </Text>
        </View>

        <FlatList
          // scrollEnabled={true}
          data={tourGuide}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={item.img}
                  style={{ height: 100, width: 100, borderRadius: 20 }}
                />
                <View style={{ paddingHorizontal: 15 }}>
                  <Text style={{ fontWeight: 600, fontSize: 18 }}>
                    {item.Name}
                  </Text>
                  <Text style={{ color: "grey", paddingVertical: 5 }}>
                    {item.Price}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <FontAwesome6 name="location-dot" size={16} color="black" />
                    <Text style={{ color: "grey" }}>{item.location}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          horizontal
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 600 }}>On Budget Tour</Text>
          <Text style={{ color: "skyblue", alignSelf: "center", fontSize: 16 }}>
            See All
          </Text>
        </View>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ gap: 20 }}
          data={BudgetTour}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={item.img}
                  style={{ height: 100, width: 100, borderRadius: 20 }}
                />
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ fontWeight: 600, fontSize: 18 }}>
                    {item.Name}
                  </Text>
                  <Text style={{ color: "grey", paddingVertical: 5 }}>
                    {item.days}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <FontAwesome6 name="location-dot" size={16} color="grey" />
                    <Text style={{ color: "grey" }}>{item.location}</Text>
                  </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    {item.Price}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
