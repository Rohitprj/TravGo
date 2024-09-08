import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const menu = require("@/assets/images/menu.png");
const darkMode = require("@/assets/images/sleep-mode.png");
const user = require("@/assets/images/user.png");
const slide = require("@/assets/images/slide.png");
const forward = require("@/assets/images/right-arrow.png");

export default function HomePage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#2c79f5",
            width: "100%",
            height: 60,
            flexDirection: "row",
          }}
        >
          <View>
            <Pressable>
              <Image source={menu} style={{ tintColor: "white", margin: 15 }} />
            </Pressable>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Pressable>
              <Image
                source={darkMode}
                style={{
                  tintColor: "white",
                  marginBottom: 5,
                  marginLeft: 190,
                  height: 30,
                  width: 30,
                  marginRight: 20,
                }}
              />
            </Pressable>
          </View>
          <Link href="./userLogin">
            <Image source={user} style={{ tintColor: "white" }} />
          </Link>
        </View>
        <View>
          <Image
            source={slide}
            style={{
              borderBottomRightRadius: 200,
              borderBottomLeftRadius: 200,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 26,
              marginLeft: 25,
              marginTop: 20,
            }}
          >
            Best travel destinations in
          </Text>
          <Text style={{ fontWeight: 500, fontSize: 26, marginLeft: 125 }}>
            the world
          </Text>

          <Text style={{ color: "grey", marginTop: 15, marginLeft: 50 }}>
            Semper in cursus magna et eu varius nunc
          </Text>
          <Text style={{ color: "grey", marginLeft: 35 }}>
            adipiscing. Elementum justo, laoreet id semiru
          </Text>
          <Text style={{ color: "grey", marginLeft: 145 }}>forigive you.</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={forward}
            style={{
              tintColor: "#2c79f5",
              height: 70,
              width: 70,
              marginBottom: 40,
              marginTop: 200,
              marginLeft: 30,
            }}
          />
          <Text style={{ color: "grey", marginTop: 225, marginLeft: 15 }}>
            Skip
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
