// Packages Imports
import { View, StyleSheet, FlatList } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

// Local Imports
import ImageCard from "./components/ImageCard";

// Constants
import { IMAGES } from "./constants/Constants";
import { ScreenWidth } from "../../constants/Dimensions";

// Create a animated Flatlist
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// function component for ParallaxCaraousel
function ParallaxCaraousel() {
  const scrollX = useSharedValue(0);

  // onScroll
  const onScroll = useAnimatedScrollHandler(event => {
    try {
      scrollX.value = event.contentOffset.x;
    } catch (error) {
      scrollX.value = 0;
    }
  });

  // render Item function
  const renderItem = ({ item, index }: any) => (
    <ImageCard source={item.source} index={index} scrollX={scrollX} />
  );

  // render
  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={IMAGES}
        keyExtractor={(item: any) => item._id.toString()}
        renderItem={renderItem}
        horizontal={true}
        onScroll={onScroll}
        pagingEnabled={true}
        decelerationRate={0.99}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainerStyle}
      />
    </View>
  );
}

// exports
export default ParallaxCaraousel;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: ScreenWidth * IMAGES.length,
  },
});
