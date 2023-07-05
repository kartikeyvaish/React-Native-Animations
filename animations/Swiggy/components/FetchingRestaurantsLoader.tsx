// Packages Imports (from node_modules)
import { View, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports (components/types/utils)

// interface for FetchingRestaurantsLoader component
export interface FetchingRestaurantsLoaderProps {}

export interface MoverCards {
  loadingProgress: SharedValue<number>;
  index: number;
}

const TOTAL_CARDS = 3;

function MoverCards(props: MoverCards) {
  // Destructuring props
  const { loadingProgress, index } = props;

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      loadingProgress.value,
      [-55, 0, 55],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      loadingProgress.value,
      [-55, 0, 55],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const zIndex = interpolate(loadingProgress.value, [-55, 0, 55], [0, 1, 0], Extrapolate.CLAMP);

    return {
      zIndex,
      opacity,
      transform: [
        {
          scale,
        },
        {
          translateX: loadingProgress.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.cardsContainer, animatedStyles]}>
      <Text style={styles.text}>{index.toString()}</Text>
    </Animated.View>
  );
}

// functional component for FetchingRestaurantsLoader
function FetchingRestaurantsLoader(props: FetchingRestaurantsLoaderProps) {
  // Destructuring props
  const {} = props;

  const loadingProgress = useSharedValue(1);
  const firstCardTranslateX = useSharedValue(-55);
  const secondCardTranslateX = useSharedValue(0);
  const thirdCardTranslateX = useSharedValue(55);

  const increaseAnimation = () => {
    if (Math.floor(loadingProgress.value) == 0) {
      firstCardTranslateX.value = withTiming(-55, { duration: 1000 });
      secondCardTranslateX.value = withTiming(0, { duration: 1000 });
      thirdCardTranslateX.value = withTiming(55, { duration: 1000 });
      loadingProgress.value += 1;
      return;
    }

    if (Math.floor(loadingProgress.value) == 1) {
      firstCardTranslateX.value = withTiming(55, { duration: 1000 });
      secondCardTranslateX.value = withTiming(-55, { duration: 1000 });
      thirdCardTranslateX.value = withTiming(0, { duration: 1000 });
      loadingProgress.value += 1;
      return;
    }

    if (Math.floor(loadingProgress.value) == 2) {
      firstCardTranslateX.value = withTiming(0, { duration: 1000 });
      secondCardTranslateX.value = withTiming(55, { duration: 1000 });
      thirdCardTranslateX.value = withTiming(-55, { duration: 1000 });
      loadingProgress.value = 0;
      return;
    }
  };

  // render
  return (
    <View style={styles.container}>
      <MoverCards loadingProgress={firstCardTranslateX} index={0} />
      <MoverCards loadingProgress={secondCardTranslateX} index={1} />
      <MoverCards loadingProgress={thirdCardTranslateX} index={2} />

      <RectButton onPress={increaseAnimation} style={styles.btn} />
    </View>
  );
}

// exports
export default FetchingRestaurantsLoader;

// styles for FetchingRestaurantsLoader
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    width: 40,
    height: 55,
    backgroundColor: "white",
    borderRadius: 6,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  btn: {
    position: "absolute",
    top: 100,
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
