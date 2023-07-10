// Packages Imports (from node_modules)
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

// Local Imports (components/types/utils)
import { ScreenWidth } from "../../../constants/Dimensions";

// interface for Dots component
export interface DotsProps {
  index: number;
  scrollProgress: SharedValue<number>;
  totalItems: number;
}

// functional component for Dots
function Dots(props: DotsProps) {
  // Destructuring props
  const { index, totalItems, scrollProgress } = props;

  const animatedContainerStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollProgress.value,
      [(index - 1) * ScreenWidth, index * ScreenWidth, (index + 1) * ScreenWidth],
      [5, 40, 5],
      Extrapolate.CLAMP
    );

    const height = interpolate(
      scrollProgress.value,
      [(index - 1) * ScreenWidth, index * ScreenWidth, (index + 1) * ScreenWidth],
      [5, 20, 5],
      Extrapolate.CLAMP
    );

    const translateX = interpolate(
      scrollProgress.value,
      [
        (index - 3) * ScreenWidth,
        (index - 2) * ScreenWidth,
        (index - 1) * ScreenWidth,
        index * ScreenWidth,
        (index + 1) * ScreenWidth,
        (index + 2) * ScreenWidth,
        (index + 3) * ScreenWidth,
      ],
      [50, 40, 30, 0, -30, -40, -50],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollProgress.value,
      [(index - 4) * ScreenWidth, index * ScreenWidth, (index + 4) * ScreenWidth],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      width,
      height,
      opacity,
      transform: [{ translateX }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollProgress.value,
      [(index - 1) * ScreenWidth, index * ScreenWidth, (index + 1) * ScreenWidth],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return { opacity };
  });

  // render
  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.Text style={[styles.label, animatedTextStyle]}>
        {index + 1}/{totalItems}
      </Animated.Text>
    </Animated.View>
  );
}

// exports
export default Dots;

// styles for Dots
const styles = StyleSheet.create({
  container: {
    borderRadius: 200,
    backgroundColor: "#fff",
    width: 40,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  label: {
    color: "black",
    fontSize: 11,
  },
});
