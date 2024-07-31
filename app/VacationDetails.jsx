import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import VacationDeails from "../assets/images/VacationDetails.png";
import pic1 from "../assets/images/profile1.jpg";
import pic2 from "../assets/images/profile2.jpg";
import pic3 from "../assets/images/boy.png";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Drawer } from "expo-router/drawer";
import { Link } from "expo-router";

export default function index() {
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

  // Dummy data for markers
  // 28.5244514,77.1835957
  // 28.6090926,77.2123052
  const markers = [
    {
      coordinate: {
        latitude: 28.5244514,
        longitude: 77.1835957,
      },
      title: "Marker 1",
      description: "This is Marker 1",
    },
    {
      coordinate: {
        latitude: 28.6090926,
        longitude: 77.2123052,
      },
      title: "Marker 2",
      description: "This is Marker 2",
    },
  ];

  return (
    <SafeAreaView>
      <Drawer.Screen
        options={{
          title: "Home Screen",
          drawerIcon: () => <Feather name="airplay" size={24} color="green" />,
        }}
      />
      <ScrollView
        style={{
          height: Dimensions.get("window").height - 120,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={VacationDeails}
          style={{ width: Dimensions.get("window").width }}
        />
        <View
          style={{
            position: "relative",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            backgroundColor: "white",
            top: -40,
            paddingHorizontal: 30,
            paddingTop: 30,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: 600 }}>Qutab Minar</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome6 name="location-dot" size={16} color="grey" />
              <Text style={{ color: "grey" }}>Mehrauli,New Delhi India</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <AntDesign name="star" size={18} color="#e3d005" />
              <Text style={{ color: "#e3d005", fontSize: 16 }}>4.4</Text>
            </View>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, paddingVertical: 15 }}>
            Details
          </Text>
          <Text style={{ lineHeight: 25, paddingBottom: 15 }}>
            Qutb Minar (also called as Qutub Minar or Qutab Minar) is a most
            famous Indian historical monuments which is counted as the 2nd
            tallest minar of India (first is Fateh Burj of 100 meters, Chappar
            Chiri at Mohali). Qutb Minar is a 73 m tall minar built in
            Indo-Islamic architectural style. It has been added to the UNESCO
            World Heritage Site. It opens every day of the week from 6am to 6pm.
            It is located at Mehrauli, Delhi-Gurgaon Road. Visiting this
            monument in the vacations is the best way to know about history.
            Delhi is a famous city for many historical monuments.
          </Text>

          <Text style={{ fontSize: 18, fontWeight: 500, paddingVertical: 20 }}>
            Tour Guide
          </Text>

          <FlatList
            data={tourGuide}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Link href={"Profile2"}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={item.img}
                      style={{ height: 120, width: 120, borderRadius: 20 }}
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
                        <FontAwesome6
                          name="location-dot"
                          size={16}
                          color="black"
                        />
                        <Text style={{ color: "grey" }}>{item.location}</Text>
                      </View>
                    </View>
                  </View>
                </Link>
              );
            }}
            horizontal
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              On Budget Tour
            </Text>
            <Text
              style={{ color: "skyblue", alignSelf: "center", fontSize: 16 }}
            >
              See All
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image source={pic3} />

            <View
              style={{ justifyContent: "space-between", paddingHorizontal: 10 }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 500 }}>
                  Rohit Kumar
                </Text>
                <Text style={{ color: "grey", marginTop: 6, fontSize: 16 }}>
                  14 April 2001
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <AntDesign name="star" size={18} color="#e3d005" />
                <AntDesign name="star" size={18} color="#e3d005" />
                <AntDesign name="star" size={18} color="#e3d005" />
                <AntDesign name="star" size={18} color="#e3d005" />
                <AntDesign name="star" size={18} color="#e3d005" />
              </View>
            </View>
          </View>

          <Text
            style={{ lineHeight: 25, paddingVertical: 20, paddingLeft: 75 }}
          >
            Qutub Minar is the second tallest and ever attractive historical It
            is considered that Mughals built this victory tower to celebrate
            their victories over the Rajputs.
          </Text>

          <Text style={{ fontSize: 20, fontWeight: 500, paddingVertical: 10 }}>
            Location
          </Text>
          <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <MapView
              style={{
                width: "100%",
                height: 160,
              }}
              initialRegion={{
                latitude: 28.61371241909174,
                longitude: 77.21157213091224,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}
            >
              {markers.map((marker) => (
                <Marker
                  key={marker.title}
                  coordinate={marker.coordinate}
                  title={marker.title}
                  description={marker.description}
                />
              ))}

              <Polyline
                coordinates={markers.map((marker) => marker.coordinate)}
                strokeColor="blue"
                strokeWidth={2}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          height: 70,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 600 }}>$32</Text>
          <Text style={{ fontSize: 18, color: "grey" }}>/Person</Text>
        </View>

        <Pressable
          style={{
            borderRadius: 80,
            borderWidth: 2,
            borderColor: "skyblue",
            height: 50,
            width: 200,
            backgroundColor: "skyblue",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Book Now
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
