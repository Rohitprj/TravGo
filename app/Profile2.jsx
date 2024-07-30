import {
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import banner from "../assets/images/banner.png";
import profile from "../assets/images/profile.png";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function Profile2() {
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
    <ScrollView>
      <View>
        <Image source={banner} />
        <Image
          style={{
            position: "absolute",
            top: 185,
            left: 30,
            borderRadius: 10,
          }}
          source={profile}
        />
        <View
          style={{
            height: Dimensions.get("window").height,
            marginTop: 60,
            paddingHorizontal: 30,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 34 }}>Jonsky Alexia</Text>
          <Text style={{ color: "grey", paddingVertical: 6 }}>
            International tour guide in india{"\n"}Travel and food vlogger
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 12,
            }}
          >
            <Pressable
              style={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "skyblue",
                width: 170,
                paddingVertical: 10,
                backgroundColor: "skyblue",
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                }}
              >
                Send Message
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#d6d5d2",
                width: 100,
                paddingVertical: 10,
                backgroundColor: "#d6d5d2",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                }}
              >
                Call Now
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <View>
              <Text style={{ color: "grey", fontSize: 16 }}>Guide</Text>
              <Text style={{ color: "skyblue", fontSize: 16 }}>700+</Text>
            </View>
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: "grey",
                alignSelf: "center",
              }}
            ></View>
            <View>
              <Text style={{ color: "grey", fontSize: 16 }}>Experience</Text>
              <Text style={{ color: "skyblue", fontSize: 16 }}>3 Years</Text>
            </View>
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: "grey",
                alignSelf: "center",
              }}
            ></View>
            <View>
              <Text style={{ color: "grey", fontSize: 16 }}>Rate</Text>
              <Text style={{ color: "skyblue", fontSize: 16 }}>4.0/5</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
              About Us
            </Text>
            <Text style={{ color: "grey", lineHeight: 22, marginBottom: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
              leo lorem nisl. Viverra vulputate sodales quis et dui, lacus.
              Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla
              facilisi commodo enim, orci feugiat pharetra. Id sagittis,
              ullamcorper turpis ultrices platea pharetra.
            </Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
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
      </View>
    </ScrollView>
  );
}

// import { View, Image, ScrollView, StyleSheet } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import banner from "../assets/images/banner.png";
// import profile from "../assets/images/profile.png";

// export default function Profile2() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <Image source={banner} style={styles.banner} />
//         <View style={styles.profileContainer}>
//           <Image style={styles.profileImage} source={profile} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContent: {
//     alignItems: "center",
//   },
//   banner: {
//     width: "100%",
//     height: 200, // Adjust height as needed
//   },
//   profileContainer: {
//     marginTop: -50, // Adjust this based on the size of the profile image
//     alignItems: "center",
//   },
//   profileImage: {
//     width: 100, // Adjust size as needed
//     height: 100, // Adjust size as needed
//     borderRadius: 10,
//     position: "absolute",
//     top: 185, // Adjust based on banner height and desired position
//     left: 30,
//   },
// });
