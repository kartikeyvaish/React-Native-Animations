// Packages Imports
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationProps";

// Screen imports
import HomeScreen from "./../screens/HomeScreen";
import Clock from "../animations/Clock/Clock";
import ClockLoader from "../animations/ClockLoader/ClockLoader";
import MoviesSlider from "../animations/MoviesSlider/MoviesSlider";
import ParallaxCaraousel from "../animations/ParallaxCaraousel/ParallaxCaraousel";
import Ringing from "../animations/Ringing/Ringing";
import BreathingLoader from "../animations/BreathingLoader/BreathingLoader";

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
      <Stack.Screen name={"MoviesSlider"} component={MoviesSlider} />
      <Stack.Screen name={"ParallaxCaraousel"} component={ParallaxCaraousel} />
      <Stack.Screen name={"Ringing"} component={Ringing} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
