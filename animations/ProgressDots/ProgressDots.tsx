// Packages Imports
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  cancelAnimation,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Local Imports
import Dots from "./components/Dots";

// Named imports
import { ProgressDotsProps } from "./types/ComponentTypes";

// function component for ProgressDots
function ProgressDots(props: ProgressDotsProps) {
  // Destructuring props
  const { dotColor, loading, dotBounceHeight } = props;

  // Shared Values
  const dotOne = useSharedValue(0);
  const dotTwo = useSharedValue(0);
  const dotThree = useSharedValue(0);

  // look for changes in loading
  useEffect(() => {
    if (loading) {
      StartAnimation();
    } else {
      StopAnimation();
    }
  }, [loading]);

  // function to stop animation
  const StopAnimation = () => {
    try {
      cancelAnimation(dotOne);
      cancelAnimation(dotTwo);
      cancelAnimation(dotThree);

      dotOne.value = withTiming(0);
      dotTwo.value = withTiming(0);
      dotThree.value = withTiming(0);
    } catch (error) {}
  };

  // function to start animation
  const StartAnimation = () => {
    try {
      dotOne.value = withRepeat(withSequence(withTiming(1, { duration: 500 }), withSpring(0)), -1);
      dotTwo.value = withDelay(
        250,
        withRepeat(withSequence(withTiming(1, { duration: 500 }), withSpring(0)), -1)
      );
      dotThree.value = withDelay(
        400,
        withRepeat(withSequence(withTiming(1, { duration: 500 }), withSpring(0)), -1)
      );
    } catch (error) {}
  };

  // render
  return (
    <View style={styles.container}>
      <Dots dotProgress={dotOne} dotColor={dotColor} dotBounceHeight={dotBounceHeight} />
      <Dots dotProgress={dotTwo} dotColor={dotColor} dotBounceHeight={dotBounceHeight} />
      <Dots dotProgress={dotThree} dotColor={dotColor} dotBounceHeight={dotBounceHeight} />
    </View>
  );
}

// exports
export default ProgressDots;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
