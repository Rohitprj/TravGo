import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import boy from "../assets/images/boy.png";
import { Link } from "expo-router";

export default function Profile() {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <ScrollView>
      <View style={{ padding: 30 }}>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <Image style={{ height: 100, width: 100 }} source={boy} />
        </View>

        <View style={{ gap: 30 }}>
          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>First Name</Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#3366ff",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "#f5f5f0",
                  height: 30,
                  width: 230,
                }}
                placeholderTextColor="grey"
                placeholder="First Name"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>Last Name</Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#3366ff",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "#f5f5f0",
                  height: 30,
                  width: 230,
                }}
                placeholderTextColor="grey"
                placeholder="Last Name"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>E-mail</Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#3366ff",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "#f5f5f0",
                  height: 30,
                  width: 230,
                }}
                placeholderTextColor="grey"
                placeholder="E-mail"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>Date of Birth</Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 50,
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#3366ff",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "#f5f5f0",
                  height: 30,
                  width: 230,
                }}
                placeholderTextColor="grey"
                placeholder="Date of Birth"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>Gender</Text>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <View
                style={{
                  width: Dimensions.get("screen").width - 220,
                  borderRadius: 50,
                  padding: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#3366ff",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Male</Text>
              </View>
              <View
                style={{
                  width: Dimensions.get("screen").width - 220,
                  borderRadius: 50,
                  padding: 10,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#3366ff",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Female</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: "grey" }}>Location</Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                height: 150,
                borderRadius: 30,
                padding: 10,
                marginTop: 10,
                borderWidth: 1,
                borderColor: "#3366ff",
                flexDirection: "row",
                gap: 5,
                padding: 20,
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "#f5f5f0",
                  height: 100,
                  width: 260,
                }}
                placeholderTextColor="grey"
                placeholder="Location"
              />
            </View>
          </View>

          <Link href="/UserLogin">
            <View
              style={{
                marginTop: 50,
                backgroundColor: "#3366ff",
                height: 70,
                width: Dimensions.get("screen").width - 60,
                borderRadius: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Save Changes
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

// const MyDateTimePicker = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);

//   const [displayStartDate, setDisplayStartDate] = useState("");
//   const [displayEndDate, setDisplayEndDate] = useState("");

//   const handleStartDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || startDate;
//     setShowStartDatePicker(false);
//     setStartDate(currentDate);
//     const formattedDate = currentDate.toLocaleDateString(); // Adjust date formatting as needed
//     setDisplayStartDate(formattedDate);
//     console.log("Start Date:", currentDate); // Print start date to console
//   };

//   const handleEndDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || endDate;
//     setShowEndDatePicker(false);
//     setEndDate(currentDate);
//     const formattedDate = currentDate.toLocaleDateString(); // Adjust date formatting as needed
//     setDisplayEndDate(formattedDate);
//     console.log("End Date:", currentDate); // Print end date to console
//   };

//   const showStartDatePickerModal = () => {
//     setShowStartDatePicker(true);
//   };

//   const showEndDatePickerModal = () => {
//     setShowEndDatePicker(true);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button onPress={showStartDatePickerModal} title="Select Start Date" />
//       {showStartDatePicker && (
//         <DateTimePicker
//           value={startDate}
//           mode="date"
//           is24Hour={true}
//           display="default"
//           onChange={handleStartDateChange}
//         />
//       )}

//       <Button onPress={showEndDatePickerModal} title="Select End Date" />
//       {showEndDatePicker && (
//         <DateTimePicker
//           value={endDate}
//           mode="date"
//           is24Hour={true}
//           display="default"
//           onChange={handleEndDateChange}
//         />
//       )}

//       <View style={{ marginTop: 20 }}>
//         <Text>Start Date: {displayStartDate}</Text>
//         <Text>End Date: {displayEndDate}</Text>
//       </View>
//     </View>
//   );
// };
