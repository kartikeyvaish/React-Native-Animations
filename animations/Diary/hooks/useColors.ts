// Packages imports
import { useContext } from "react";

// Local imports
import ThemeContext from "../context/ThemeContext";

// Custom hook to get the theme functions and objects
export default function useColors() {
    // get the theme context
    const { ChangeMode, theme } = useContext(ThemeContext);

    // return the theme functions and objects
    return { ChangeMode, colors: theme?.colors, dark: theme?.dark }
}