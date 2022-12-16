// Packages Imports
import { StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";

// interface for TimerCounter
export interface TimerCounterProps {
  visible?: boolean;
  counterValue: number;
}

// function component for TimerCounter
function TimerCounter(props: TimerCounterProps) {
  // Destructuring props
  const { visible, counterValue } = props;

  // render
  return visible ? (
    <Animated.Text style={styles.timerCounter} entering={FadeIn} exiting={FadeOut}>
      {counterValue.toString()}
    </Animated.Text>
  ) : null;
}

// exports
export default TimerCounter;

// styles
const styles = StyleSheet.create({
  timerCounter: { position: "absolute", fontSize: 100, color: ColorPallete.white, top: 100 },
});
