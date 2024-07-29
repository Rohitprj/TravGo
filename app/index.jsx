import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import MyBooked from "./MyBooked";
import MyDateTimePicker from "./DateTimePicker";
import SearchDestination from "./SearchDestination";
import HomePage2 from "./HomePage2";
import MyComponent from "./ScrollLogic";
import PagerComponent from "./HomePage2";
import SplashScreen from "./SplashScreen";
import Profile from "./Profile";
import UserLogin from "./UserLogin";
import MyAddress from "./MyAddress";
import NewAddress from "../components/NewAddress";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import Security from "./Security";
import Notifications from "./Notifications";
import Language from "./Language";
import HelpSupport from "./HelpSupport";

export default function index() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  });

  return (
    <View>
      {/* <HomePage2 /> */}
      {/* <MyComponent/> */}
      {/* <PagerComponent/> */}
      {/* <MyBooked /> */}
      {/* <MyDateTimePicker /> */}
      {/* <SearchDestination /> */}
      {/* <HomePage /> */}
      {/* {(splash ? <SplashScreen/> : <HomePage/> )} */}
      {/* <Profile/> */}
      {/* <UserLogin /> */}
      {/* <ChangePassword/> */}
      {/* <MyAddress/> */}
      {/* <NewAddress /> */}
      {/* <ForgotPassword/> */}
      {/* <Security/> */}
      {/* <Notifications/> */}
      {/* <Language/> */}
      <HelpSupport/>
    </View>
  );
}
