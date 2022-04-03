// Packages Imports
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import Animated, { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";

// Constants
import { ScreenWidth } from "./../../../constants/Dimensions";
const IMAGE_WIDTH = ScreenWidth * 0.8;
const IMAGE_HEIGHT = ScreenWidth * 1.5;

// interface for ImageCard
export interface ImageCard {
  source: ImageSourcePropType;
  scrollX: SharedValue<number>;
  index: number;
}

// function component for ImageCard
function ImageCard(props: ImageCard) {
  // Destructuring props
  const { source, index, scrollX } = props;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 1) * ScreenWidth, index * ScreenWidth, (index + 1) * ScreenWidth],
      [-100, 0, 100]
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
  return (
    <View style={styles.container}>
      <View style={styles.imageContainerStyles}>
        <Animated.Image source={source} style={[styles.imageStyle, animatedStyle]} />
      </View>
    </View>
  );
}

// exports
export default ImageCard;

// styles
const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    height: ScreenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerStyles: {
    backgroundColor: ColorPallete.white,
    borderWidth: 10,
    borderColor: ColorPallete.white,
    elevation: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageStyle: { width: IMAGE_WIDTH, height: IMAGE_HEIGHT, borderRadius: 20 },
});
