// Packages Imports
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

// Local Imports
import ProgressDots from "./ProgressDots";

// function component for ProgressDotsScreen
function ProgressDotsScreen() {
  // Get the theme
  const { colors } = useTheme();

  // Local States
  const [Loading, SetLoading] = useState(false);

  // render
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ProgressDots dotColor={colors.text} loading={Loading} dotBounceHeight={20} />
      </View>

      <View style={styles.controls}>
        <Button title="Start" onPress={() => SetLoading(true)} />
        <Button title="Stop" onPress={() => SetLoading(false)} />
      </View>
    </View>
  );
}

// exports
export default ProgressDotsScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
