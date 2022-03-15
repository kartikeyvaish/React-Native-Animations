// Packages Imports
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

// Local Imports
import { ScreenWidth } from "../../../constants/Dimensions";

// interface for Hand
export interface HandProps {
  progress: SharedValue<number>;
  rotateEach: number;
  style?: StyleProp<ViewStyle>;
}

// function component for Hand
function Hand(props: HandProps) {
  // Destructuring props
  const { style, progress, rotateEach } = props;

  // Animated Style for the hour hand
  const AnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${progress.value * rotateEach}deg`,
      },
    ],
  }));

  const handStyles: StyleProp<ViewStyle> = [style];

  // render
  return (
    <Animated.View style={[styles.mover, AnimatedStyles]}>
      <View style={handStyles} />
    </Animated.View>
  );
}

// exports
export default Hand;

// styles
const styles = StyleSheet.create({
  mover: {
    position: "absolute",
    width: ScreenWidth * 0.9,
    height: ScreenWidth * 0.9,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
