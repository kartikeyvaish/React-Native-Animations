// Packages Imports
import { useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

// interface for BlinkingComponent
export interface BlinkingComponentProps {
  shouldBlink?: boolean;
  children?: any;
  containerStyle?: StyleProp<ViewStyle>;
}

// function component for BlinkingComponent
function BlinkingComponent(props: BlinkingComponentProps) {
  // Destructuring props
  const { shouldBlink, children, containerStyle } = props;

  // useEffect to listener to shouldBlink
  useEffect(() => {
    if (shouldBlink) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [shouldBlink]);

  // Shared value for the animation
  const opacity = useSharedValue(1);

  // function to start the blinking animation
  const startAnimation = () => {
    opacity.value = withRepeat(
      withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 500 })),
      -1,
      true
    );
  };

  // function to stop the blinking animation
  const stopAnimation = () => {
    cancelAnimation(opacity);
    opacity.value = 1;
  };

  // animated Styles
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // render
  return <Animated.View style={[containerStyle, animatedStyles]}>{children}</Animated.View>;
}

// exports
export default BlinkingComponent;
