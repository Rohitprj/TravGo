import { View, Text, Dimensions, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Textarea from "react-native-textarea";

export default function NewAddress() {
  const [CountryValue, setCountyrValue] = useState(null);
  const [CityValue, setCityValue] = useState(null);
  const [StateValue, setStateValue] = useState(null);
  const CountryData = [
    { label: "India", value: "1" },
    { label: "Pakistan", value: "2" },
    { label: "London", value: "3" },
    { label: "America", value: "4" },
    { label: "China", value: "5" },
    { label: "Russia", value: "6" },
    { label: "Japan", value: "7" },
    { label: "Brazil", value: "8" },
  ];
  const CityData = [
    { label: "Kolkata", value: "1" },
    { label: "Chandigarh", value: "2" },
    { label: "Lakhnow", value: "3" },
    { label: "Bengaluru", value: "4" },
    { label: "Mumbai", value: "5" },
    { label: "Ahmedabad", value: "6" },
    { label: "Hyderabad", value: "7" },
    { label: "Chennai", value: "8" },
  ];
  const StateData = [
    { label: "Delhi", value: "1" },
    { label: "Haryana", value: "2" },
    { label: "Mumbai", value: "3" },
    { label: "Rajasthan", value: "4" },
    { label: "Kerala", value: "5" },
    { label: "J&K", value: "6" },
    { label: "Goa", value: "7" },
    { label: "Chenai", value: "8" },
  ];
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 30, paddingVertical: 50, gap: 30 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            Full Name
          </Text>
          <View
            style={{
              width: Dimensions.get("screen").width - 60,
              borderRadius: 50,
              padding: 10,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "#e6e6e6",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderColor: "#e6e6e6",
                height: 30,
                width: 270,
                fontWeight: "600",
              }}
              placeholderTextColor="grey"
              placeholder="Enter Full Name/ Home/ Office"
              // secureTextEntry={true}
            />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            Country
          </Text>
          <Dropdown
            style={{
              width: Dimensions.get("screen").width - 60,
              borderRadius: 50,
              padding: 15,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "#e6e6e6",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
            data={CountryData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="Country"
            value={CountryValue}
            onChange={setCountyrValue}
            placeholderStyle={{ fontWeight: "600", color: "grey" }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            City
          </Text>
          <Dropdown
            style={{
              width: Dimensions.get("screen").width - 60,
              borderRadius: 50,
              padding: 15,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "#e6e6e6",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
            data={CityData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="City"
            value={CityValue}
            onChange={setCityValue}
            placeholderStyle={{ fontWeight: "600", color: "grey" }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            State
          </Text>
          <Dropdown
            style={{
              width: Dimensions.get("screen").width - 60,
              borderRadius: 50,
              padding: 15,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "#e6e6e6",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
            data={StateData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="State"
            placeholderStyle={{ fontWeight: "600", color: "grey" }}
            value={StateValue}
            onChange={setStateValue}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            Zip Code
          </Text>
          <View
            style={{
              width: Dimensions.get("screen").width - 60,
              borderRadius: 50,
              padding: 10,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "#e6e6e6",
              backgroundColor: "#e6e6e6",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderColor: "#e6e6e6",
                height: 30,
                width: 270,
                fontWeight: "600",
              }}
              placeholderTextColor="grey"
              placeholder="Enter Zip Code"
            />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 16, color: "grey", fontWeight: "600" }}>
            Detail Address
          </Text>
          <View>
            <Textarea
              containerStyle={{
                borderRadius: 30,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#e6e6e6",
                backgroundColor: "#e6e6e6",
                gap: 5,
                padding: 20,
              }}
              style={{
                borderWidth: 1,
                borderColor: "#e6e6e6",
                fontWeight: "600",
              }}
              onChangeText={this.onChange}
              maxLength={220}
              placeholder={"Enter your Address"}
              placeholderTextColor={"#c7c7c7"}
            />
          </View>
        </View>

        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Pressable
            style={{
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "skyblue",
              backgroundColor: "skyblue",
              width: Dimensions.get("screen").width - 50,
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                color: "#ffff",
                alignSelf: "center",
                fontSize: 20,
              }}
            >
              Select Address
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
