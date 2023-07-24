// Packages Imports (from node_modules)
import { useEffect } from "react";
import { ViewStyle, StyleProp, StyleSheet } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

// interface for RingView component
export interface RingViewProps {
  duration?: number;
  delay?: number;
  size?: number;
  ringColor?: string;
  ringBorderWidth?: number;
}

// functional component for RingView
function RingView(props: RingViewProps) {
  // Destructuring props
  const {
    delay = 0,
    duration = 2000,
    size = 100,
    ringColor = "darkgreen",
    ringBorderWidth = 2,
  } = props;

  // shared value for animation progress
  const animationProgress = useSharedValue<number>(0);

  // Start the animation
  useEffect(() => {
    animationProgress.value = withRepeat(
      withDelay(delay, withTiming(1, { duration: duration, easing: Easing.linear })),
      -1,
      false
    );

    return () => {
      animationProgress.value = 0;
    };
  }, []);

  // styles for the container
  const containerStyles: StyleProp<ViewStyle> = [
    StyleSheet.absoluteFillObject,
    {
      width: size,
      height: size,
      borderRadius: size,
      borderColor: ringColor,
      borderWidth: ringBorderWidth,
    },
  ];

  // animated styles for the container
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(animationProgress.value, [0, 1], [1, 0], Extrapolate.CLAMP);
    const scale = interpolate(animationProgress.value, [0, 1], [0, 1], Extrapolate.CLAMP);

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  // render
  return <Animated.View style={[containerStyles, animatedStyles]} />;
}

// exports
export default RingView;
