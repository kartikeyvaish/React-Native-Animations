// Packages imports
import { useEffect, useCallback } from "react";
import { Dimensions, StyleSheet, View, Appearance } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

// Local imports
import { ColorPickerComponent } from "./components/ColorPickerComponent";
import Colors from "../../theme/Colors";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

// RGB Colors
const COLORS = ["red", "purple", "blue", "cyan", "green", "yellow", "orange", "black", "white"];

// Backlground color the screen
const BACKGROUND_COLOR = "#212121";

// Dimensions
const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.8;
const PICKER_WIDTH = width * 0.9;

// default export
export default function ColorPicker() {
  // Shared Values
  const pickedColor = useSharedValue<string | number>(COLORS[0]);

  // change navigation bar color
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(BACKGROUND_COLOR);

    return () => {
      const colorScheme = Appearance.getColorScheme();
      NavigationBar.setBackgroundColorAsync(
        colorScheme === "dark" ? Colors.dark.colors.background : Colors.light.colors.background
      );
    };
  }, []);

  // function to handle on color change
  const onColorChanged = useCallback((color: string | number) => {
    "worklet";
    pickedColor.value = color;
  }, []);

  // animated style
  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    };
  });

  return (
    <>
      <StatusBar backgroundColor={BACKGROUND_COLOR} style="light" />

      <View style={styles.topContainer}>
        <Animated.View style={[styles.circle, rStyle]} />
      </View>

      <View style={styles.bottomContainer}>
        <ColorPickerComponent
          colors={COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
          maxWidth={PICKER_WIDTH}
          onColorChanged={onColorChanged}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 3,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  gradient: { height: 40, width: PICKER_WIDTH, borderRadius: 20 },
});
