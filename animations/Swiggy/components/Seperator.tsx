// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import { SeperateMarginProps } from "../../../types/ComponentTypes";

// Local Imports (components/types/utils)

// interface for Seperator component
export interface SeperatorProps extends SeperateMarginProps {}

// functional component for Seperator
function Seperator(props: SeperatorProps) {
  // Destructuring props
  const {} = props;

  const margins = { ...props };

  // render
  return <View style={[styles.container, margins]}></View>;
}

// exports
export default Seperator;

// styles for Seperator
const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 1,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 20,
  },
});
