// Packages Imports
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationProps";

// Screen imports
import HomeScreen from "./../screens/HomeScreen";
import BreathingLoader from "../animations/BreathingLoader/BreathingLoader";
import Clock from "../animations/Clock/Clock";
import ClockLoader from "../animations/ClockLoader/ClockLoader";
import MenuToggler from "../animations/MenuToggler/MenuToggler";
import MoviesSlider from "../animations/MoviesSlider/MoviesSlider";
import ParallaxCaraousel from "../animations/ParallaxCaraousel/ParallaxCaraousel";
import ProgressDotsScreen from "../animations/ProgressDots/ProgressDotsScreen";
import Ringing from "../animations/Ringing/Ringing";
import TallyCounter from "../animations/TallyCounter/TallyCounter";
import VolumeSlider from "../animations/VolumeSlider/VolumeSlider";

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
      <Stack.Screen name={"BreathingLoader"} component={BreathingLoader} />
      <Stack.Screen name={"Clock"} component={Clock} />
      <Stack.Screen name={"ClockLoader"} component={ClockLoader} />
      <Stack.Screen name={"MenuToggler"} component={MenuToggler} />
      <Stack.Screen name={"MoviesSlider"} component={MoviesSlider} />
      <Stack.Screen name={"ParallaxCaraousel"} component={ParallaxCaraousel} />
      <Stack.Screen name={"ProgressDots"} component={ProgressDotsScreen} />
      <Stack.Screen name={"Ringing"} component={Ringing} />
      <Stack.Screen name={"TallyCounter"} component={TallyCounter} />
      <Stack.Screen name={"VolumeSlider"} component={VolumeSlider} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
