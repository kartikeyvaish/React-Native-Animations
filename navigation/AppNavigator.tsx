// Packages Imports
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationProps";

// Screen imports
import HomeScreen from "./../screens/HomeScreen";
import AnimatedFlatList from "../animations/AnimatedFlatlist/AnimatedFlatList";
import AnimatedOTPInput from "../animations/AnimatedOTPInput/AnimatedOTPInputScreen";
import AnimatingSlider from "../animations/AnimatedSlider/AnimatedSlider";
import AnimatedTimer from "../animations/AnimatedTimer/AnimatedTimer";
import BreathingLoader from "../animations/BreathingLoader/BreathingLoader";
import CircularProgress from "../animations/CircularProgress/CircularProgress";
import Clock from "../animations/Clock/Clock";
import ClockLoader from "../animations/ClockLoader/ClockLoader";
import ColorPicker from "../animations/ColorPicker/ColorPicker";
import CreditCard from "../animations/CreditCard/CreditCard";
import DelayedText from "../animations/DelayedText/DelayedText";
import FlingCardStackScreen from "../animations/FlingCardStack/FlingCardStackScreen";
import FlipCard from "../animations/FlipCard/FlipCard";
import GridMagnification from "../animations/Grid Magnification/GridMagnification";
import ListRemover from "../animations/ListRemover/ListRemover";
import MenuToggler from "../animations/MenuToggler/MenuToggler";
import MetaballAnimation from "../animations/MetaBallAnimation/Metaball";
import MoviesSlider from "../animations/MoviesSlider/MoviesSlider";
import OnBoarding from "../animations/Onboarding/OnBoarding";
import ParallaxCaraousel from "../animations/ParallaxCaraousel/ParallaxCaraousel";
import ProgressDotsScreen from "../animations/ProgressDots/ProgressDotsScreen";
import Ringing from "../animations/Ringing/Ringing";
import RippleEffect from "../animations/RippleEffect/RippleEffect";
import ShakeItUp from "../animations/ShakeItUp/ShakeItUp";
import SwiggyNavigator from "../animations/Swiggy/navigation/SwiggyStackNavigator";
import TallyCounter from "../animations/TallyCounter/TallyCounter";
import ThemeChanger from "../animations/ThemeChanger/ThemeChanger";
import VolumeSlider from "../animations/VolumeSlider/VolumeSlider";
import WhatsAppMic from "../animations/WhatsAppMic/WhatsAppMic";

// Create a Stack Navigator
const Stack = createNativeStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // screen options
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/* App Screens */}
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"AnimatedFlatlist"} component={AnimatedFlatList} />
      <Stack.Screen name={"AnimatedOTPInput"} component={AnimatedOTPInput} />
      <Stack.Screen name={"AnimatingSlider"} component={AnimatingSlider} />
      <Stack.Screen name={"AnimatedTimer"} component={AnimatedTimer} />
      <Stack.Screen name={"BreathingLoader"} component={BreathingLoader} />
      <Stack.Screen name={"CircularProgress"} component={CircularProgress} />
      <Stack.Screen name={"Clock"} component={Clock} />
      <Stack.Screen name={"ClockLoader"} component={ClockLoader} />
      <Stack.Screen name={"ColorPicker"} component={ColorPicker} />
      <Stack.Screen name={"CreditCard"} component={CreditCard} />
      <Stack.Screen name={"DelayedText"} component={DelayedText} />
      <Stack.Screen name={"FlingCardStackScreen"} component={FlingCardStackScreen} />
      <Stack.Screen name={"FlipCard"} component={FlipCard} />
      <Stack.Screen name={"GridMagnification"} component={GridMagnification} />
      <Stack.Screen name={"ListRemover"} component={ListRemover} />
      <Stack.Screen name={"MenuToggler"} component={MenuToggler} />
      <Stack.Screen name={"MetaballAnimation"} component={MetaballAnimation} />
      <Stack.Screen name={"MoviesSlider"} component={MoviesSlider} />
      <Stack.Screen name={"OnBoarding"} component={OnBoarding} />
      <Stack.Screen name={"ParallaxCaraousel"} component={ParallaxCaraousel} />
      <Stack.Screen name={"ProgressDots"} component={ProgressDotsScreen} />
      <Stack.Screen name={"Ringing"} component={Ringing} />
      <Stack.Screen name={"RippleEffect"} component={RippleEffect} />
      <Stack.Screen name={"ShakeItUp"} component={ShakeItUp} />
      <Stack.Screen name={"SwiggyScreen"} component={SwiggyNavigator} />
      <Stack.Screen name={"TallyCounter"} component={TallyCounter} />
      <Stack.Screen name={"ThemeChanger"} component={ThemeChanger} />
      <Stack.Screen name={"VolumeSlider"} component={VolumeSlider} />
      <Stack.Screen name={"WhatsAppMic"} component={WhatsAppMic} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
