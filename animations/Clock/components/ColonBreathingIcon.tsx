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

// Local Imports
import AppText from "../../../components/AppText";

// interface for ColorBreathingIcon
export interface ColonBreathingIconProps {
  color?: string;
  size?: number;
  outerContainerStyle?: StyleProp<ViewStyle>;
  innerContainerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  visible?: boolean;
}

// function component for ColorBreathingIcon
function ColorBreathingIcon(props: ColonBreathingIconProps) {
  // Destructuring props
  const { size = 12, visible } = props;

  // useEffect to listener to visible
  useEffect(() => {
    if (visible) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [visible]);

  const opacity = useSharedValue(1);

  const startAnimation = () => {
    opacity.value = withRepeat(
      withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 500 })),
      -1,
      true
    );
  };

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
  return (
    <Animated.View style={animatedStyles}>
      <AppText text=" : " size={40} />
    </Animated.View>
  );
}

// exports
export default ColorBreathingIcon;
