// Packages Imports
import { StyleSheet, StyleProp, ViewStyle, ImageSourcePropType, Image, View } from "react-native";
import Animated, { Layout } from "react-native-reanimated";

// Local imports
import { ITEM_HEIGHT, ITEM_WIDTH } from "../constants/configs";

// interface for Item
export interface ItemProps {
  id: number;
  source: ImageSourcePropType;
}

// function component for Item
function Item({ id, source }: ItemProps) {
  // container styles
  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      top: Math.floor(id / 2) * ITEM_HEIGHT,
      left: id % 2 === 0 ? 0 : ITEM_WIDTH,
    },
  ];

  // render
  return (
    <Animated.View style={containerStyle} layout={Layout}>
      <View style={styles.innerContainer}>
        <Image source={source} style={{ width: "100%", height: "100%" }} />
      </View>
    </Animated.View>
  );
}

// exports
export default Item;

// styles
const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    padding: 10,
    position: "absolute",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
});
