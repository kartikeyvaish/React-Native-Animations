// Packages imports
import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar"

// Local imports 
import ColorPallete from "../../../utils/ColorPallete";
import { useTheme } from "@react-navigation/native";

// Custom hook to set the navigation bar color on focus
export default function useScreen() {
    // Get the theme
    const { colors } = useTheme();

    useEffect(() => {
        if (Platform.OS === "android") {
            NavigationBar.setBackgroundColorAsync(ColorPallete.black)

            return () => {
                NavigationBar.setBackgroundColorAsync(colors.background)
            }
        }
    }, [])
}