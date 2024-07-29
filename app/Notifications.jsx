import { View, Text, Dimensions, Switch } from "react-native";
import React from "react";

export default function Notifications() {
  const [PaymentId, setPaymentId] = React.useState(false);
  const PaymentIdToggle = () => setPaymentId((previousState) => !previousState);

  const [Schedule, setSchedule] = React.useState(false);
  const ScheduleToggle = () => setSchedule((previousState) => !previousState);

  const [Message, setMessage] = React.useState(false);
  const MessageToggle = () => setMessage((previousState) => !previousState);
  
  const [Call, setCall] = React.useState(false);
  const CallToggle = () => setCall((previousState) => !previousState);

  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 40,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: "#e3e7ec",
          height: 330,
          width: 300,
          borderRadius: 10,
          gap: 12,
        }}
      >
        <Text style={{ fontWeight: "500", color: "grey" }}>
          Messages Notifications
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Payment Reminder</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={PaymentId ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={PaymentIdToggle}
            value={PaymentId}
          />
        </View>
        <View
          style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Schedule Reminder</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={Schedule ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={ScheduleToggle}
            value={Schedule}
          />
        </View>
        <View
          style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Message</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={Message ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={MessageToggle}
            value={Message}
          />
        </View>

        <View
          style={{ height: 1, width: 255, backgroundColor: "#e3e7ec" }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Call</Text>
          <Switch
            trackColor={{ false: "#f4f3f4", true: "skyblue" }}
            thumbColor={Call ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={CallToggle}
            value={Call}
          />
        </View>
      </View>
    </View>
  );
}
