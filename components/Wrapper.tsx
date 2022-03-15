// Packages Imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

// Local Imports
import { WrapperProps } from "../types/ComponentTypes";
import useThemeManager from "../hooks/useThemeManager";

// function component for Wrapper
function Wrapper(props: WrapperProps) {
  // Destructuring props
  const { children } = props;

  // Custom hook to manage theme
  const { Theme } = useThemeManager();

  // Bar Style
  const barStyle = Theme.dark === false ? "dark-content" : "light-content";

  // StatusBar background color
  const barBackgroundColor = Theme.colors.background;

  // render
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      {/* StatusBar */}
      <StatusBar barStyle={barStyle} backgroundColor={barBackgroundColor} animated={true} />
      <NavigationContainer theme={Theme}>{children}</NavigationContainer>
    </GestureHandlerRootView>
  );
}

// exports
export default Wrapper;
