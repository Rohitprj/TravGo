import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const profile = require("@/assets/images/boy.png");
const location = require("@/assets/images/location.png");
const arrow = require("@/assets/images/ForArrow.png");
const Security = require("@/assets/images/security.png");
const Delete = require("@/assets/images/delete.png");
const Theme = require("@/assets/images/nightMode.png");
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Switch } from "react-native-gesture-handler";

const UserLogin = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView>
      <View style={{ paddingVertical: 30 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 85,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View>
                <Image source={profile} />
              </View>

              <View>
                <Text style={{ fontSize: 25, fontWeight: 400 }}>
                  Rohit Kumar
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="location-pin" size={22} color="#ababab" />
                  <Text
                    style={{
                      color: "#ababab",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Delhi, India
                  </Text>
                </View>
              </View>
            </View>

            <Link href={"Profile"}>
              <FontAwesome6 name="edit" size={24} color="black" />
            </Link>
          </View>
        </View>

        <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
          <View>
            <View style={{ paddingVertical: 5, paddingTop: 5 }}>
              <Text style={{ fontWeight: 400 }}>Personal Info</Text>
            </View>

            <Link href={"MyAddress"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                  // backgroundColor:"red"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Image source={location} style={{}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    My Address
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            <Link href={"Payment"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <SimpleLineIcons name="wallet" size={24} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Payment Method
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>
          </View>

          {/* Security */}

          <View style={{}}>
            <View style={{ paddingVertical: 5, paddingTop: 20 }}>
              <Text style={{ fontWeight: 400 }}>Security</Text>
            </View>

            <Link href={"ChangePassword"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Feather
                    name="lock"
                    size={26}
                    color="black"
                    style={{ marginTop: 2 }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Change Password
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            <Link href={"ForgotPassword"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Feather
                    name="unlock"
                    size={26}
                    color="black"
                    style={{ marginTop: 2 }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Forgot Password
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            <Link href={"Security"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Image source={Security} style={{ marginTop: 5 }} />

                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Security
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            <Link href={"Notifications"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 28,
                  }}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={28}
                    color="black"
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Notifications
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>
          </View>

          <View style={{}}>
            <View style={{ paddingVertical: 5, paddingTop: 20 }}>
              <Text style={{ fontWeight: 400 }}>General</Text>
            </View>

            <Link href={"Language"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <MaterialIcons name="language" size={28} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Language
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            {/* <Link href={"Payment"}> */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Image source={Delete} style={{ marginTop: 5 }} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Clear cache
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            {/* </Link> */}
          </View>

          <View style={{}}>
            <View style={{ paddingVertical: 5, paddingTop: 20 }}>
              <Text style={{ fontWeight: 400 }}>About</Text>
            </View>

            <Link href={"LegalPolicies"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Feather name="shield" size={28} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Legal and Policies
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>

            <Link href={"HelpSupport"}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <Feather name="help-circle" size={28} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Help & Support
                  </Text>
                </View>
                <Image source={arrow} style={{ tintColor: "#ababab" }} />
              </View>
            </Link>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: Dimensions.get("screen").width - 60,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 35,
                  }}
                >
                  <MaterialIcons name="dark-mode" size={24} color="black" />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Dark Mode
                  </Text>
                </View>
                <Switch
                  trackColor={{ false: "#f4f3f4", true: "#ababab" }}
                  thumbColor={isEnabled ? "grey" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={{
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "skyblue",
              width: Dimensions.get("screen").width - 50,
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                color: "skyblue",
                alignSelf: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              Log Out
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserLogin;
