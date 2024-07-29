// import React, { useState } from "react";
// import { View, Button, Text } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

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

// export default MyDateTimePicker;
