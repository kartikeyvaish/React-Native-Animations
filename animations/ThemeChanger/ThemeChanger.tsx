// Packages Imports
import { useEffect, useState } from "react";
import { StyleSheet, Appearance } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

// Local Imports
import Colors from "../../theme/Colors";
import ScalingPoint from "./components/ScalingPoint";
import Theme from "../../theme/Colors";
import Toggler from "./components/Toggler";

// initial value
const isDark = Appearance.getColorScheme() === "dark";

// function component for ThemeChanger
function ThemeChanger() {
  // Local States
  const [IsDark, SetIsDark] = useState<boolean>(isDark);

  // Shared Values
  const isDarkProgress = useSharedValue<number>(IsDark ? 1 : 0);

  // theme
  const ThemeConfig = IsDark ? Theme.dark : Theme.light;

  // Light/Dark mode change listener
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }: any) => ChangeTheme(colorScheme));

    return () => {
      if (subscription.remove !== undefined) {
        subscription.remove();
      }
    };
  }, []);

  // Change the navigation Bar color on ccomponent load
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(ThemeConfig.colors.background);

    return () => {
      const colorScheme = Appearance.getColorScheme();
      NavigationBar.setBackgroundColorAsync(
        colorScheme === "dark" ? Colors.dark.colors.background : Colors.light.colors.background
      );
    };
  }, [ThemeConfig]);

  // Change theme
  const ChangeTheme = (colorScheme: any) => {
    SetIsDark(colorScheme === "dark");

    if (colorScheme === "dark") {
      isDarkProgress.value = withTiming(1, { duration: 500 });
    } else {
      isDarkProgress.value = withTiming(0, { duration: 500 });
    }
  };

  // render
  return (
    <>
      <StatusBar backgroundColor={IsDark ? "black" : "white"} style={IsDark ? "light" : "dark"} />
      <Animated.View style={[styles.container]}>
        <ScalingPoint isDarkProgress={isDarkProgress} />

        <Toggler
          onTogglePress={() => ChangeTheme(IsDark ? "light" : "dark")}
          textColor={ThemeConfig.colors.text}
          backgroundColor={ThemeConfig.colors.background}
          isDarkProgress={isDarkProgress}
        />
      </Animated.View>
    </>
  );
}

// exports
export default ThemeChanger;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
