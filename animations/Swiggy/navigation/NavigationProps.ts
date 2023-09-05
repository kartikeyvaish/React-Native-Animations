// Packages Imports
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Utils/Types imports  

// Swiggy Navigator Screen Params
export type SwiggyStackParamsList = {
    // Swiggy Stack Screens
    HomeScreen: undefined;
    CategoriesScreen: undefined;
    MenuScreen: undefined;
};

// Props for Swiggy Navigator's Screens
export type SwiggyScreenProps<Screen extends keyof SwiggyStackParamsList> = NativeStackScreenProps<
    SwiggyStackParamsList,
    Screen
>;

// Screen Names types for AppNavigator
export type SwiggyScreenNamesTypes = {
    [key in keyof SwiggyStackParamsList]: any;
};
