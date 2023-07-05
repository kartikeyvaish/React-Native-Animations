// Packages Imports
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

// Types/components/Navigators imports
import { SwiggyStackParamsList } from "./NavigationProps";

// Screen imports
import CategoriesScreen from "../screens/CategoriesScreen";
import SwiggyScreen from "../SwiggyScreen";

// Create a Stack Navigator
const Stack = createNativeStackNavigator<SwiggyStackParamsList>();

// Function for SwiggyNavigator
function SwiggyNavigator() {
  // screen options
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/* App Screens */}
      <Stack.Screen name={"HomeScreen"} component={SwiggyScreen} />
      <Stack.Screen name={"CategoriesScreen"} component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

// Exporting SwiggyNavigator
export default SwiggyNavigator;
