// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue, withTiming } from "react-native-reanimated";

// Local Imports (components/types/utils)
import ItemCard from "./components/ItemCard";
import { CARD_DATA } from "./mock/data";

// interface for FlingCardStack component
export interface FlingCardStackProps {}

// functional component for FlingCardStack
function FlingCardStack(props: FlingCardStackProps) {
  // Destructuring props
  const {} = props;

  const currentItemIndex = useSharedValue(0);

  const flingUpAction = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      let currentValue = Math.floor(currentItemIndex.value);

      if (currentValue === 0) return;

      currentValue = Math.floor(Math.max(currentItemIndex.value - 1, 0));
      currentItemIndex.value = withTiming(currentValue);
    });

  const flingDownAction = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      let currentValue = Math.floor(currentItemIndex.value);

      if (currentValue === CARD_DATA.length - 1) return;

      currentValue = Math.floor(Math.min(currentItemIndex.value + 1, CARD_DATA.length));
      currentItemIndex.value = withTiming(currentValue);
    });

  // render
  return (
    <GestureDetector gesture={Gesture.Exclusive(flingUpAction, flingDownAction)}>
      <View style={styles.container} pointerEvents='box-none' testID='fling-stack-component'>
        {CARD_DATA.map((item, index) => (
          <ItemCard
            {...item}
            key={item.id}
            index={index}
            totalItems={CARD_DATA.length}
            currentItemIndex={currentItemIndex}
            maxNumberOfCards={6}
          />
        ))}
      </View>
    </GestureDetector>
  );
}

// exports
export default FlingCardStack;

// styles for FlingCardStack
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
});
