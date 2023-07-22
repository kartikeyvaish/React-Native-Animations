// Packages Imports (from node_modules)
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  SharedValue,
  WithTimingConfig,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports (components/types/utils)
import { ScreenHeight } from "../../../constants/Dimensions";

// interface for FlingItem component
export interface FlingItemProps {
  index: number;
  image: string;
  currentItemIndex: SharedValue<number>;
  name: string;
  focused: boolean;
}

const SCALE_ANIMATION_CONFIGS: WithTimingConfig = {
  duration: 1000,
};

// functional component for FlingItem
function FlingItem(props: FlingItemProps) {
  // Destructuring props
  const { index, image, currentItemIndex, focused, name } = props;

  const scaleProgress = useDerivedValue(() => {
    return focused ? withTiming(1.1, SCALE_ANIMATION_CONFIGS) : 1;
  }, [focused]);

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      currentItemIndex.value,
      [index - 1, index, index + 1],
      [ScreenHeight, 0, -ScreenHeight],
      Extrapolate.CLAMP
    );

    return {
      zIndex: index === 0 ? 10 : 1,
      transform: [
        {
          translateY,
        },
      ],
    };
  });

  const innerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleProgress.value,
        },
      ],
    };
  });

  // render
  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, { overflow: "hidden" }, animatedStyles]}>
      <Animated.View style={[StyleSheet.absoluteFillObject, innerAnimatedStyles]}>
        <Image source={{ uri: image }} style={styles.coverImage} contentFit='cover' />
      </Animated.View>

      {focused ? (
        <Animated.View style={styles.bottomTextContainer} entering={FadeIn} exiting={FadeOut}>
          <Animated.Text entering={FadeIn} exiting={FadeOut} style={styles.name}>
            {name}
          </Animated.Text>
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}

// exports
export default FlingItem;

// styles for FlingItem
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  bottomTextContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
