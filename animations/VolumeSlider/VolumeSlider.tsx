// Packages Imports
import { View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const VOLUME_SLIDER_HEIGHT = 300;
const VOLUME_SLIDER_WIDTH = 80;
const ICON_OFFSET = 60;

// Local Imports

// function component for VolumeSlider
function VolumeSlider() {
  // Shared Values
  const dragProgress = useSharedValue(0);

  const { colors } = useTheme();

  // handler to handle scroll
  const panHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      dragProgress.value = event.y;
    },
    onActive: event => {
      dragProgress.value = event.y;
    },
  });

  // animated styles for the moving component
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      dragProgress.value,
      [0, VOLUME_SLIDER_HEIGHT],
      [0, VOLUME_SLIDER_HEIGHT],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  // animated styles for the moving icon
  const animatedIconStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      dragProgress.value,
      [ICON_OFFSET, VOLUME_SLIDER_HEIGHT],
      [0, VOLUME_SLIDER_HEIGHT - ICON_OFFSET],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  // render
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panHandler}>
        <Animated.View
          style={{
            width: VOLUME_SLIDER_WIDTH,
            height: VOLUME_SLIDER_HEIGHT,
            borderRadius: 100,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.text,
          }}
        >
          <Animated.View
            style={[
              {
                flex: 1,
                backgroundColor: "dodgerblue",
              },
              animatedStyle,
            ]}
          ></Animated.View>

          <Animated.View
            style={[{ position: "absolute", alignSelf: "center", top: 20 }, animatedIconStyle]}
          >
            <Feather name="volume-2" size={24} color={colors.text} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

// exports
export default VolumeSlider;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
