// Packages Imports
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import CaraouselImage from "./CaraouselImage";

// Local Imports

export interface ImageCardProps {
  _id: number;
  source: any;
  scrolling: SharedValue<number>;
}

const DeviceWidth = Dimensions.get("window").width;

// function component for ImageCard
function ImageCard(props: ImageCardProps) {
  // Destructuring props
  const { scrolling, source } = props;

  // Animated Style for ImageCard
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrolling.value, [0, 1], [1, 0.85], Extrapolate.CLAMP);

    return {
      transform: [{ scale }],
    };
  });

  // render
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.imageCard, animatedStyle]}>
        <CaraouselImage source={source} />
      </Animated.View>
    </Animated.View>
  );
}

// exports
export default ImageCard;

// styles
const styles = StyleSheet.create({
  container: {
    width: DeviceWidth,
    height: DeviceWidth,
  },
  imageCard: {
    flex: 1,
  },
});
