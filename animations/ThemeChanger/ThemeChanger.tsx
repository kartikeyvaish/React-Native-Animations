// Packages Imports
import { useEffect, useState } from "react";
import { StyleSheet, Appearance } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import * as StatusBar from "expo-status-bar";

// Local Imports
import Theme from "../../theme/Colors";
import Toggler from "./components/Toggler";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import ScalingPoint from "./components/ScalingPoint";

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
    StatusBar.setStatusBarBackgroundColor(ThemeConfig.colors.background, false);
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
    <Animated.View style={[styles.container]}>
      <ScalingPoint isDarkProgress={isDarkProgress} />

      <Toggler
        onTogglePress={() => ChangeTheme(IsDark ? "light" : "dark")}
        textColor={ThemeConfig.colors.text}
        backgroundColor={ThemeConfig.colors.background}
        isDarkProgress={isDarkProgress}
      />
    </Animated.View>
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
