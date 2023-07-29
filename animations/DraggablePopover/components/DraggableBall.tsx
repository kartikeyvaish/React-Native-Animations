// Packages Imports (from node_modules)
import { StyleSheet, Pressable } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

// interface for Draggableball component
export interface DraggableballProps {
  onPress?: () => void;
  onLongPress?: () => void;
  xCoOrdinate: SharedValue<number>;
  yCoOrdinate: SharedValue<number>;
  onTouchStart?: () => void;
  ballSize?: number;
  isMoving?: boolean;
}

// functional component for Draggableball
function Draggableball(props: DraggableballProps) {
  // Destructuring props
  const { xCoOrdinate, yCoOrdinate, ballSize = 50, isMoving, ...otherProps } = props;

  // This is a progress value for styles for ball when focused
  const movingStyleProgress = useDerivedValue(() => {
    return isMoving ? withTiming(1) : withTiming(0);
  }, [isMoving]);

  // Animated styles for the ball
  const animatedStyles = useAnimatedStyle(() => {
    const elevation = interpolate(movingStyleProgress.value, [0, 1], [0, 10], Extrapolate.CLAMP);
    const shadowOpacity = interpolate(movingStyleProgress.value, [0, 1], [0, 1], Extrapolate.CLAMP);

    return {
      elevation,
      shadowOpacity,
      width: ballSize,
      height: ballSize,
      borderRadius: ballSize / 2,
      top: yCoOrdinate.value,
      left: xCoOrdinate.value,
    };
  });

  // render
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Pressable style={{ flex: 1 }} {...otherProps} />
    </Animated.View>
  );
}

// exports
export default Draggableball;

// styles for Draggableball
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  },
});
