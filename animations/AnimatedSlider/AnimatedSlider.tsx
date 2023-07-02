// Packages Imports
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports
import ImageCard from "./components/ImageCard";

// Constants
const DeviceWidth = Dimensions.get("window").width;
import { IMAGES } from "./constants/Constants";

// function component for AnimatedSlider
function AnimatedSlider() {
  // Shared Values
  const scrolling = useSharedValue(0);

  // on scroll handler
  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag: e => (scrolling.value = withTiming(1)),
    onMomentumEnd: e => (scrolling.value = withTiming(0)),
  });

  // render
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={IMAGES}
        testID='animated-slider'
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => <ImageCard {...item} scrolling={scrolling} />}
        horizontal
        contentContainerStyle={styles.contentContainer}
        style={styles.contentContainer}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

// exports
export default AnimatedSlider;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    maxHeight: DeviceWidth,
  },
});
