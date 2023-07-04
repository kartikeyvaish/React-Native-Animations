// Packages Imports (from node_modules)
import { useEffect } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
  cancelAnimation,
  Extrapolate,
} from "react-native-reanimated";

interface CommonProps {
  dark?: boolean;
  ringsCount?: number;
  ringColor?: string;
}

// interface for SwiggyLoader component
export interface SwiggyLoaderProps extends CommonProps {
  containerStyles?: StyleProp<ViewStyle>;
}

// interface for Ring component
export interface RingProps extends CommonProps {
  delay: number;
}

const DEFAULT_RINGS_COUNT = 7;

const Ring = (props: RingProps) => {
  // Desctructuring props
  const { delay, dark = false, ringsCount = DEFAULT_RINGS_COUNT, ringColor } = props;

  const ring = useSharedValue(0);

  const ringExtraStyles = {
    borderColor: ringColor ? ringColor : dark ? "white" : "black",
  };

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(ring.value, [0, 0.2, 1], [0, 1, 0], Extrapolate.CLAMP),
      width: interpolate(ring.value, [0, 1], [0, 600], Extrapolate.CLAMP),
      height: interpolate(ring.value, [0, 1], [0, 600], Extrapolate.CLAMP),
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(withTiming(1, { duration: ringsCount * 300 }), -1, false)
    );

    return () => {
      ring.value = 0;
      cancelAnimation(ring);
    };
  }, []);

  return <Animated.View style={[styles.ring, ringStyle, ringExtraStyles]} />;
};

// functional component for SwiggyLoader
function SwiggyLoader(props: SwiggyLoaderProps) {
  // Destructuring props
  const { ringsCount = DEFAULT_RINGS_COUNT, containerStyles } = props;

  // render
  return (
    <View style={[styles.container, containerStyles]}>
      {Array(ringsCount)
        .fill(null)
        .map((_, index) => (
          <Ring key={index} delay={index * 300} {...props} />
        ))}
    </View>
  );
}

// exports
export default SwiggyLoader;

// styles for SwiggyLoader
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  ring: {
    position: "absolute",
    width: 0,
    height: 0,
    borderRadius: 9000,
    borderWidth: 1,
  },
});
