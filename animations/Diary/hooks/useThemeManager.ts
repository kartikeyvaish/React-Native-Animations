// Packages imports
import { useEffect } from "react";
import { Appearance } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { useDispatch, useSelector } from "react-redux";

// Local Imports such as ActionCreators etc.
import ThemeActionCreators from "../store/theme/actions";

/**
 * * Hook to use the theme manager
 * @returns A function called `ChangeMode` which takes a scheme as parameter and changes theme accordingly.
 *  Also it returns a `theme` variable which is the current theme.
 */
export default function useThemeManager() {
    // Holds the State
    const { themeState } = useSelector((state: any) => state);

    // Get the current theme
    const { theme } = themeState;

    // Dispatcher to update Redux Store
    const dispatch = useDispatch();

    // function to change theme
    const ChangeMode = (mode: string) => dispatch(ThemeActionCreators.ChangeMode(mode));

    // Set the initial navigation bar color
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(theme.colors.background);
    }, []);

    // Light/Dark mode change listener
    useEffect(() => {
        Appearance.addChangeListener(({ colorScheme }: any) => ChangeMode(colorScheme));

        return () => Appearance.removeChangeListener(({ colorScheme }: any) => ChangeMode(colorScheme));
    }, []);

    // return the required states
    return { ChangeMode, theme };
}