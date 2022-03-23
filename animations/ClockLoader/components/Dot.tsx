// Packages Imports
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";
import { DOT_SIZE, DEFAULT_DOT_COUNT } from "../constants/Constants";

// interface for Dot
export interface DotProps {
  index: number;
  progress: SharedValue<number>;
}

// function component for Dot
function Dot(props: DotProps) {
  // Destructuring props
  const { index, progress } = props;

  // Angles for Dot
  const OFFSET_ANGLE = (Math.PI * 2) / DEFAULT_DOT_COUNT;
  const FINAL_ANGLE = OFFSET_ANGLE * (DEFAULT_DOT_COUNT - 1 - index);

  // Rotate value which decide at how much angle to rotate
  const rotate = useDerivedValue(() => {
    if (progress.value < Math.PI * 2) {
      return Math.min(FINAL_ANGLE, progress.value);
    }

    if (progress.value - 2 * Math.PI < FINAL_ANGLE) {
      return FINAL_ANGLE;
    } else return progress.value;
  }, []);

  // translateY value which decide at how much distance to translate
  const translateY = useDerivedValue(() => {
    if (rotate.value === FINAL_ANGLE) {
      return withSpring(-DEFAULT_DOT_COUNT * DOT_SIZE);
    }

    if (progress.value > 2 * Math.PI) {
      return withTiming((index - DEFAULT_DOT_COUNT) * DOT_SIZE);
    }

    return withTiming(-index * DOT_SIZE);
  });

  // ReAnimated style for Dot
  const reAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}rad`,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  // final styles
  const finalDotStyles: StyleProp<ViewStyle> = [styles.container, reAnimatedStyles];

  // render
  return <Animated.View style={finalDotStyles} />;
}

// exports
export default Dot;

// styles
const styles = StyleSheet.create({
  container: {
    height: DOT_SIZE,
    aspectRatio: 1,
    backgroundColor: ColorPallete.white,
    position: "absolute",
  },
});
