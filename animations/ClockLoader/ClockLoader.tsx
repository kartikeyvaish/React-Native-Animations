// Packages Imports
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Easing, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../utils/ColorPallete";
import Dot from "./components/Dot";

// Constants
import { DEFAULT_ARRAY } from "./constants/Constants";

// function component for ClockLoader
function ClockLoader() {
  // Shared Value for the rotation
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(4 * Math.PI, { duration: 4000, easing: Easing.linear }),
      -1
    );
  }, []);

  // render
  return (
    <View style={styles.container}>
      {DEFAULT_ARRAY.map((_, index) => (
        <Dot key={index} index={index} progress={progress} />
      ))}
    </View>
  );
}

// exports
export default ClockLoader;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallete.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
