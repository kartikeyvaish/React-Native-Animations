// Packages Imports
import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import * as NavigationBar from "expo-navigation-bar"

// Local Imports
import Themes from "../theme/Colors";

// Default theme for the app
const INITIAL_MODE = Appearance.getColorScheme()
const DefaultTheme = INITIAL_MODE === "dark" ? Themes.dark : Themes.light;

// Custom hook to manage a local theme
export default function useThemeManager() {

    // Local States
    const [Theme, SetTheme] = useState(DefaultTheme);

    // Change the navigation Bar color on app start
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(Theme.colors.background)
    }, [Theme])

    // Light/Dark mode change listener
    useEffect(() => {
        Appearance.addChangeListener(({ colorScheme }: any) => ChangeMode(colorScheme));

        return () => Appearance.removeChangeListener(({ colorScheme }: any) => ChangeMode(colorScheme));
    }, []);

    // function to change theme
    const ChangeMode = (mode: string) => SetTheme(mode === "dark" ? Themes.dark : Themes.light)

    // return the current theme
    return { Theme };
}