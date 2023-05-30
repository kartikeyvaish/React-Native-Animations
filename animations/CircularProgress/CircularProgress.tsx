// Packages imports
import { useEffect } from "react";
import { StyleSheet, Text, View, Appearance, Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

// Local imports
import Progress from "./Progress";
import Colors from "../../theme/Colors";

// exporting the default component
export default function CircularProgress() {
  // change navigation bar color
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("black");

      return () => {
        const colorScheme = Appearance.getColorScheme();
        NavigationBar.setBackgroundColorAsync(
          colorScheme === "dark" ? Colors.dark.colors.background : Colors.light.colors.background
        );
      };
    }
  }, []);

  // render
  return (
    <>
      <StatusBar backgroundColor='black' style='light' />

      <View style={styles.container}>
        <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
          <Text style={styles.heading}>Default View</Text>
          <Progress progress={40} />
        </View>

        <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
          <Text style={styles.heading}>Change Colors</Text>
          <Progress progress={60} outerCircleColor='brown' progressCircleColor='orange' />
        </View>

        <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
          <Text style={styles.heading}>Show/Remove Label</Text>
          <Progress progress={40} showLabel={false} />
        </View>

        <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
          <Text style={styles.heading}>Increase Width of Stroke</Text>
          <Progress progress={40} strokeWidth={20} />
        </View>
      </View>
    </>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  heading: {
    color: "white",
    marginBottom: 20,
    fontSize: 15,
  },
});
