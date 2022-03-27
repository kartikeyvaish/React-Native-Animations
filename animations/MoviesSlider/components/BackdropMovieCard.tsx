// Packages Imports
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

// Constants
import { ScreenWidth } from "../../../constants/Dimensions";
import { ITEM_SIZE } from "../constants/Constants";

// Types imports
import { MoviesCardProps } from "../types/types";

// function component for BackdropMovieCard
function BackdropMovieCard(props: MoviesCardProps) {
  // Destructuring props
  const { backdrop, scrollX, index } = props;

  const AnimatedStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
      [ScreenWidth, 0]
    );

    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });

  // render
  return <Animated.Image source={{ uri: backdrop }} style={[styles.image, AnimatedStyles]} />;
}

// exports
export default BackdropMovieCard;

// styles
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
