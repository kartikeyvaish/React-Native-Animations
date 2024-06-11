// Packages Imports (from node_modules)
import { useState } from "react";
import { View, StyleSheet, LayoutChangeEvent, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  FadeIn,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Path, Svg } from "react-native-svg";

// Local Imports (components/types/utils)
import ColorPallete from "../../utils/ColorPallete";

// Named Imports
import { ScreenWidth } from "../../constants/Dimensions";

// Constants
const SIDE_GAP = 5;
const BALL_SIZE = 50;
const BALL_WALL_MARGIN = 8;
const SLIDER_WIDTH = ScreenWidth - 32;

// functional component for Slider
function Slider() {
  // Local States
  const [complete, setComplete] = useState<boolean>(false);
  const [sliderWidth, setSliderWidth] = useState<number>(ScreenWidth - 32);

  // Shared Values
  const ballPosition = useSharedValue(0);

  // Derived Values
  const maxLeftPosition = sliderWidth - BALL_SIZE - SIDE_GAP;

  // handler to handle scroll
  const panHandler = useAnimatedGestureHandler({
    onStart: _ => {
      if (!complete) ballPosition.value = 0;
    },
    onActive: event => {
      if (!complete) ballPosition.value = event.translationX;
    },
    onEnd: event => {
      if (!complete) {
        if (event.translationX > maxLeftPosition) {
          runOnJS(setComplete)(true);
        } else {
          ballPosition.value = withTiming(0);
        }
      }
    },
  });

  const onContainerLayout = (layout: LayoutChangeEvent) => {
    setSliderWidth(layout.nativeEvent.layout.width);
  };

  const ballAnimatedStyle = useAnimatedStyle(() => {
    const leftPosition = interpolate(
      ballPosition.value,
      [0, maxLeftPosition],
      [SIDE_GAP, maxLeftPosition],
      Extrapolate.CLAMP
    );

    return {
      left: leftPosition,
    };
  });

  const slideToPayAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      ballPosition.value,
      [0, maxLeftPosition * 0.5],
      [1, 0],
      Extrapolate.CLAMP
    );

    return { opacity };
  });

  const littleBitAnimated = useAnimatedStyle(() => {
    const opacity = interpolate(
      ballPosition.value,
      [
        maxLeftPosition * 0.5 - 10,
        maxLeftPosition * 0.5,
        maxLeftPosition * 0.9,
        maxLeftPosition,
      ],
      [0, 1, 1, 0],
      Extrapolate.CLAMP
    );

    return { opacity };
  });

  // render
  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      <PanGestureHandler onGestureEvent={panHandler}>
        <Animated.View style={[styles.moverCircle, ballAnimatedStyle]}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M17.946 11.41L7.38 3.156a.187.187 0 00-.302.148v1.811a.38.38 0 00.143.296L15.659 12 7.22 18.588a.372.372 0 00-.143.296v1.811c0 .157.18.244.302.148l10.566-8.252a.75.75 0 000-1.182z"
              fill="#000"
              fillOpacity={0.45}
            />
          </Svg>
        </Animated.View>
      </PanGestureHandler>

      <Animated.View
        style={[slideToPayAnimatedStyle, styles.notifyTextContainer]}
      >
        <Text style={styles.notifyText}>Slide To Pay</Text>
      </Animated.View>

      <Animated.View style={[littleBitAnimated, styles.notifyTextContainer]}>
        <Text style={styles.notifyText}>Almost Done</Text>
      </Animated.View>

      {complete ? (
        <Animated.View
          style={[slideToPayAnimatedStyle, styles.notifyTextContainer]}
          entering={FadeIn}
        >
          <Text style={styles.notifyText}>Payment Successfull</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

// exports
export default Slider;

// styles for Slider
const styles = StyleSheet.create({
  container: {
    width: SLIDER_WIDTH,
    height: BALL_WALL_MARGIN + BALL_SIZE,
    borderRadius: BALL_WALL_MARGIN + BALL_SIZE,
    backgroundColor: "#12d400",
    alignItems: "center",
    justifyContent: "center",
  },
  moverCircle: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: "white",
    position: "absolute",
    left: SIDE_GAP,
    justifyContent: "center",
    alignItems: "center",
  },
  notifyText: {
    fontSize: 18,
    color: ColorPallete.white,
  },
  notifyTextContainer: {
    position: "absolute",
  },
});
