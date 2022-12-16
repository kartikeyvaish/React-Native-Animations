// Packages Imports
import { StyleSheet } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";

// interface for TimerMover
export interface TimerMoverProps {
  visible?: boolean;
  transalteY: SharedValue<number>;
}

// function component for TimerMover
function TimerMover(props: TimerMoverProps) {
  // Destructuring props
  const { visible, transalteY } = props;

  // animated styles for the timer container
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transalteY.value }],
    };
  });

  // render
  return visible ? <Animated.View style={[styles.timerContainer, animatedStyles]} /> : null;
}

// exports
export default TimerMover;

// styles
const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: ColorPallete.dodgerBlue,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
