// Packages Imports (from node_modules)
import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

// Local Imports (components/types/utils)
import Slider from "./Slider";

// interface for SlideToPay component
export interface SlideToPayProps {}

// functional component for SlideToPay
function SlideToPay(props: SlideToPayProps) {
  // Destructuring props
  const {} = props;

  const [resetCounter, setResetCounter] = useState<number>(0);

  // render
  return (
    <View style={styles.container} testID="slide-to-pay">
      <Slider key={resetCounter.toString()} />

      <View style={styles.resetButtonContainer}>
        <Button
          title="Reset Counter"
          onPress={() => setResetCounter(resetCounter + 1)}
        />
      </View>
    </View>
  );
}

// exports
export default SlideToPay;

// styles for SlideToPay
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButtonContainer: {
    position: "absolute",
    bottom: 40,
  },
});
