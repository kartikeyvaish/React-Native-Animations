// Packages Imports (from node_modules)
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import AppText from "../../../components/AppText";
import SwiggyLoader from "./SwiggyLoader";
import useThemeManager from "../../../hooks/useThemeManager";

// interface for SwiggyScreenLoader component
export interface SwiggyScreenLoaderProps {
  username?: string;
  onAnimationFinish?: () => void;
}

// functional component for SwiggyScreenLoader
function SwiggyScreenLoader(props: SwiggyScreenLoaderProps) {
  // Destructuring props
  const { username = "KARTIKEY", onAnimationFinish } = props;

  const textProgress = useSharedValue(200);

  useEffect(() => {
    setTimeout(() => {
      textProgress.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) });
    }, 1000);

    setTimeout(() => {
      textProgress.value = withTiming(
        -200,
        { duration: 500, easing: Easing.out(Easing.ease) },
        () => {
          if (onAnimationFinish !== undefined && typeof onAnimationFinish === "function") {
            runOnJS(onAnimationFinish)();
          }
        }
      );
    }, 4000);
  }, []);

  const { Theme } = useThemeManager();

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(textProgress.value, [-200, 0, 200], [0, 1, 0], Extrapolate.CLAMP);

    return {
      opacity,
      transform: [
        {
          translateY: textProgress.value,
        },
      ],
    };
  });

  // render
  return (
    <AppContainer style={styles.container}>
      <SwiggyLoader dark={Theme.dark} containerStyles={{ position: "absolute" }} />

      <Animated.View style={[styles.textContainer, animatedStyles]}>
        <AppText
          text={`HI ${username}`}
          style={styles.title}
          numberOfLines={1}
          adjustsFontSizeToFit
        />
        <AppText
          text='Shortlisting options for you'
          style={styles.subheading}
          numberOfLines={1}
          adjustsFontSizeToFit
        />
      </Animated.View>
    </AppContainer>
  );
}

// exports
export default SwiggyScreenLoader;

// styles for SwiggyScreenLoader
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "dodgerblue",
    letterSpacing: 5,
    fontSize: 18,
  },
  subheading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
