// Packages Imports (from node_modules)
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";

// Local Imports (components/types/utils)
import { DEFAULT_LOCATION_IMAGE } from "../mock/data";
import { ItemProps } from "../types/types";
import { ScreenHeight } from "../../../constants/Dimensions";

// interface for ItemCard component
export interface ItemCardProps extends ItemProps {
  totalItems: number;
  index: number;
  currentItemIndex: SharedValue<number>;
  maxNumberOfCards?: number;
}

// functional component for ItemCard
function ItemCard(props: ItemCardProps) {
  // Destructuring props
  const {
    type,
    distance,
    from,
    role,
    to,
    currentItemIndex,
    index,
    totalItems,
    maxNumberOfCards = 5,
  } = props;

  // Animated Styles
  const animatedStyles = useAnimatedStyle(() => {
    return {
      zIndex: totalItems - index,
      opacity: interpolate(
        currentItemIndex.value,
        [index - 1, index, index + 1],
        [1 - 1 / maxNumberOfCards, 1, 1]
      ),
      transform: [
        {
          translateY: interpolate(
            currentItemIndex.value,
            [index - 1, index, index + 1],
            [-30, 0, ScreenHeight * 0.6 + 30]
          ),
        },
        {
          scale: interpolate(currentItemIndex.value, [index - 1, index, index + 1], [0.9, 1, 1]),
        },
      ],
    };
  });

  // render
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Text style={styles.title}>{type}</Text>

      <View style={[styles.row]}>
        <Ionicons name='time-outline' style={styles.icons} />
        <Text style={styles.subheadings}>{`${from} - ${to}`}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name='location' style={styles.icons} />
        <Text style={styles.subheadings}>{`${distance} km`}</Text>
      </View>

      <View style={[styles.row]}>
        <FontAwesome name='shopping-bag' style={styles.icons} />
        <Text style={styles.subheadings}>{role}</Text>
      </View>

      <View style={{ flex: 1, overflow: "hidden" }}>
        <Image source={{ uri: DEFAULT_LOCATION_IMAGE }} style={styles.image} />
      </View>
    </Animated.View>
  );
}

// exports
export default ItemCard;

// styles for ItemCard
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: ScreenHeight * 0.6,
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    color: "black",
  },
  subheadings: {
    color: "black",
    fontSize: 16,
    marginLeft: 8,
  },
  icons: {
    fontSize: 20,
    color: "black",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  image: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
  },
});
