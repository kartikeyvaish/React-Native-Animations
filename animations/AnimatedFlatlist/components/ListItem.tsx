// Packages Imports
import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

// Local Imports
import { ListItemProps } from "../types/Types";

// function component for ListItem
function ListItem(props: ListItemProps) {
  // Destructuring props
  const { visibleItems, id } = props;

  // Animated Styles for the container
  const animatedStyles = useAnimatedStyle(() => {
    // Check if the item is visible
    const isVisible = Boolean(
      visibleItems.value.filter(item => item.isViewable).find(viewableItem => viewableItem.item.id === id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return <Animated.View style={[styles.container, animatedStyles]} />;
}

// exports
export default memo(ListItem);

// styles
const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#78CAD2",
    margin: 15,
    marginTop: 0,
    borderRadius: 10,
  },
});
