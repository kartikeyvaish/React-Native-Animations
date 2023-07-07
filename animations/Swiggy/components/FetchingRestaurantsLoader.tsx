// Packages Imports (from node_modules)
import { useEffect } from "react";
import { StyleSheet, StyleProp, TextStyle, ViewStyle } from "react-native";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// interface for FetchingRestaurantsLoader component
export interface FetchingRestaurantsLoaderProps {
  dark?: boolean;
}

export interface MoverCards {
  loadingProgress: SharedValue<number>;
  progress: SharedValue<number>;
  index: number;
  dark?: boolean;
}

const ANIMATION_DURATION = 400;
const TRANSLATE_DISTANCE = 55;
const UNFOCUSED_OPACITY = 0.3;
const UNFOCUSED_SCALE = 0.8;
const ANIMATION_REPEATER_DURATION = 800;

function MoverCards(props: MoverCards) {
  // Destructuring props
  const { loadingProgress, index, progress, dark } = props;

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor: dark ? "white" : "#212121",
    shadowColor: dark ? "white" : "#212121",
  };

  const animatedStyles = useAnimatedStyle(() => {
    const firstCardScale = interpolate(
      progress.value,
      [0, 1, 2],
      [1, UNFOCUSED_SCALE, UNFOCUSED_SCALE],
      Extrapolate.CLAMP
    );

    const firstCardOpacity = interpolate(
      progress.value,
      [0, 1, 2],
      [1, UNFOCUSED_OPACITY, UNFOCUSED_OPACITY],
      Extrapolate.CLAMP
    );

    const secondCardScale = interpolate(
      progress.value,
      [0, 1, 2],
      [UNFOCUSED_SCALE, 1, UNFOCUSED_SCALE],
      Extrapolate.CLAMP
    );

    const secondCardOpacity = interpolate(
      progress.value,
      [0, 1, 2],
      [UNFOCUSED_OPACITY, 1, UNFOCUSED_OPACITY],
      Extrapolate.CLAMP
    );

    const thirdCardScale = interpolate(
      progress.value,
      [0, 1, 2],
      [UNFOCUSED_SCALE, UNFOCUSED_SCALE, 1],
      Extrapolate.CLAMP
    );

    const thirdCardOpacity = interpolate(
      progress.value,
      [0, 1, 2],
      [UNFOCUSED_OPACITY, UNFOCUSED_OPACITY, 1],
      Extrapolate.CLAMP
    );

    const zIndex = interpolate(
      loadingProgress.value,
      [-TRANSLATE_DISTANCE, 0, TRANSLATE_DISTANCE],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const rotateX = interpolate(
      loadingProgress.value,
      [-TRANSLATE_DISTANCE, 0, TRANSLATE_DISTANCE],
      [40, 0, -40],
      Extrapolate.CLAMP
    );

    return {
      zIndex,
      opacity:
        index === 0
          ? withTiming(firstCardOpacity, { duration: ANIMATION_DURATION })
          : index === 1
          ? withTiming(secondCardOpacity, { duration: ANIMATION_DURATION })
          : withTiming(thirdCardOpacity, { duration: ANIMATION_DURATION }),
      transform: [
        {
          scale:
            index === 0
              ? withTiming(firstCardScale, { duration: ANIMATION_DURATION })
              : index === 1
              ? withTiming(secondCardScale, { duration: ANIMATION_DURATION })
              : index === 2
              ? withTiming(thirdCardScale, { duration: ANIMATION_DURATION })
              : withTiming(1, { duration: ANIMATION_DURATION }),
        },
        {
          translateX: loadingProgress.value,
        },
        {
          rotateY: `${rotateX}deg`,
        },
      ],
    };
  });

  return <Animated.View style={[styles.cardsContainer, animatedStyles, containerStyle]} />;
}

// functional component for FetchingRestaurantsLoader
function FetchingRestaurantsLoader(props: FetchingRestaurantsLoaderProps) {
  // Destructuring props
  const { dark } = props;

  const loadingProgress = useSharedValue(1);
  const firstCardTranslateX = useSharedValue(-TRANSLATE_DISTANCE);
  const secondCardTranslateX = useSharedValue(0);
  const thirdCardTranslateX = useSharedValue(TRANSLATE_DISTANCE);

  useEffect(() => {
    const animationRepeater = setInterval(() => {
      increaseAnimation();
    }, ANIMATION_REPEATER_DURATION);

    return () => {
      clearInterval(animationRepeater);
    };
  }, []);

  const increaseAnimation = () => {
    if (Math.floor(loadingProgress.value) == 0) {
      firstCardTranslateX.value = withTiming(-TRANSLATE_DISTANCE, { duration: ANIMATION_DURATION });
      secondCardTranslateX.value = withTiming(0, { duration: ANIMATION_DURATION });
      thirdCardTranslateX.value = withTiming(TRANSLATE_DISTANCE, { duration: ANIMATION_DURATION });
      loadingProgress.value += 1;
      return;
    }

    if (Math.floor(loadingProgress.value) == 1) {
      firstCardTranslateX.value = withTiming(TRANSLATE_DISTANCE, { duration: ANIMATION_DURATION });
      secondCardTranslateX.value = withTiming(-TRANSLATE_DISTANCE, {
        duration: ANIMATION_DURATION,
      });
      thirdCardTranslateX.value = withTiming(0, { duration: ANIMATION_DURATION });
      loadingProgress.value += 1;
      return;
    }

    if (Math.floor(loadingProgress.value) == 2) {
      firstCardTranslateX.value = withTiming(0, { duration: ANIMATION_DURATION });
      secondCardTranslateX.value = withTiming(TRANSLATE_DISTANCE, { duration: ANIMATION_DURATION });
      thirdCardTranslateX.value = withTiming(-TRANSLATE_DISTANCE, { duration: ANIMATION_DURATION });
      loadingProgress.value = 0;
      return;
    }
  };

  const textStyles: StyleProp<TextStyle> = {
    color: dark ? "white" : "black",
  };

  // render
  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut}>
      <MoverCards
        loadingProgress={firstCardTranslateX}
        index={0}
        dark={dark}
        progress={loadingProgress}
      />

      <MoverCards
        loadingProgress={secondCardTranslateX}
        index={1}
        dark={dark}
        progress={loadingProgress}
      />

      <MoverCards
        loadingProgress={thirdCardTranslateX}
        index={2}
        dark={dark}
        progress={loadingProgress}
      />

      <Animated.Text entering={FadeIn} style={[styles.animatedText, textStyles]}>
        Shortlisting options for you
      </Animated.Text>
    </Animated.View>
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardsContainer: {
    width: 40,
    height: TRANSLATE_DISTANCE,
    borderRadius: 6,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: "white",
  },
  animatedText: {
    fontSize: 20,
    fontWeight: "bold",
    top: 60,
  },
});
