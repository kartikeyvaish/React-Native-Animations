// Packages imports
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar"
import { useTheme } from "@react-navigation/native";
import ColorPallete from "../../../utils/ColorPallete";

// Local imports 

// Custom hook to set the navigation bar color on focus
export default function useScreen() {
    // Get the theme
    const { colors } = useTheme();

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(ColorPallete.black)

        return () => {
            NavigationBar.setBackgroundColorAsync(colors.background)
        }
    }, [])
}