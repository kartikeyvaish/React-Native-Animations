// Packages Imports (from node_modules)
import { useEffect, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";

// Local Imports (components/types/utils)
import data from "./mock/data";
import FlingItem from "./components/FlingItem";

// functional component for ParookavilleFlingScreen
function ParookavilleFlingScreen() {
  // Get the theme
  const { colors } = useTheme();

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("black");

      return () => {
        NavigationBar.setBackgroundColorAsync(colors.background);
      };
    }
  }, []);

  // Shared Values
  const currentItemIndex = useSharedValue<number>(0);

  // Local States
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  // Function to execute when user flings up
  const flingUpAction = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      let currentValue = Math.floor(currentItemIndex.value);

      if (currentValue === data.length - 1) return;

      currentValue = Math.floor(Math.min(currentItemIndex.value + 1, data.length));
      currentItemIndex.value = withTiming(currentValue, { duration: 200 }, isFinished => {
        if (isFinished) {
          runOnJS(setFocusedIndex)(currentValue);
        }
      });
    });

  // Function to execute when user flings down
  const flingDownAction = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      let currentValue = Math.floor(currentItemIndex.value);

      if (currentValue === 0) return;

      currentValue = Math.floor(Math.max(currentItemIndex.value - 1, 0));
      currentItemIndex.value = withTiming(currentValue, { duration: 200 }, isFinished => {
        if (isFinished) {
          runOnJS(setFocusedIndex)(currentValue);
        }
      });
    });

  // render
  return (
    <>
      <StatusBar style='light' backgroundColor='black' />

      <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
        <GestureDetector gesture={Gesture.Exclusive(flingUpAction, flingDownAction)}>
          <Animated.View
            style={styles.container}
            pointerEvents='box-none'
            testID='parookaville-list-container'
          >
            {data.map((item, index) => (
              <FlingItem
                key={index}
                index={index}
                currentItemIndex={currentItemIndex}
                focused={focusedIndex === index}
                {...item}
              />
            ))}
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </>
  );
}

// exports
export default ParookavilleFlingScreen;

// styles for ParookavilleFlingScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
