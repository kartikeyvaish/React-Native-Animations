// Packages Imports
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

// Local imports
import { DotsProps } from "../types/ComponentTypes";

// function component for Dots
function Dots(props: DotsProps) {
  // Destructuring props
  const { dotProgress, dotColor = "black", dotBounceHeight = 10 } = props;

  // styles for dot
  const dotStyle: StyleProp<ViewStyle> = [
    styles.dot,
    {
      backgroundColor: dotColor,
    },
  ];

  const dotAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(dotProgress.value, [0, 1], [0, -dotBounceHeight]);

    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  // render
  return <Animated.View style={[dotStyle, dotAnimatedStyles]} />;
}

// exports
export default Dots;

// styles
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
});
