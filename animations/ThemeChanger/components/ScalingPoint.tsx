// Packages Imports
import { Dimensions, StyleSheet } from "react-native";
import Animated, { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

// Local Imports
import Theme from "../../../theme/Colors";

// Scaling Factor
const scalingFactor = Dimensions.get("window").height;

// interface for ScalingPoint
export interface ScalingPointProps {
  isDarkProgress: SharedValue<number>;
}

// function component for ScalingPoint
function ScalingPoint(props: ScalingPointProps) {
  // Destructuring props
  const { isDarkProgress } = props;

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(isDarkProgress.value, [0, 1], [1, scalingFactor]);

    return {
      transform: [{ scale }],
      backgroundColor: Theme.dark.colors.background,
    };
  });

  // render
  return <Animated.View style={[styles.container, animatedStyles]}></Animated.View>;
}

// exports
export default ScalingPoint;

// styles
const styles = StyleSheet.create({
  container: { width: 5, height: 5, borderRadius: 10000, position: "absolute" },
});
