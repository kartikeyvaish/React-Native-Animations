// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import { SPACER_ITEM_SIZE } from "../constants/Constants";

// function component for SpacerComponent
function SpacerComponent() {
  // render
  return <View style={styles.container} />;
}

// exports
export default SpacerComponent;

// styles
const styles = StyleSheet.create({
  container: { width: SPACER_ITEM_SIZE },
});
