// Packages Imports
import { StyleSheet } from "react-native";
import Animated, { Layout } from "react-native-reanimated";

// interface for Mover
export interface MoverProps {
  width?: number;
  left?: number;
  delay?: number;
}

// function component for Mover
function Mover(props: MoverProps) {
  // Destructuring props
  const { width = 20, left = 0, delay = 0 } = props;

  // render
  return (
    <Animated.View
      style={[styles.container, { width: `${width}%`, left: `${left}%` }]}
      layout={Layout.delay(delay)}
    />
  );
}

// exports
export default Mover;

// styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "20%",
    height: "100%",
    backgroundColor: "#00BB90",
  },
});
