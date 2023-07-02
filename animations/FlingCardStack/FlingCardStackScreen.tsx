// Packages Imports (from node_modules)
import { useEffect } from "react";
import { View, StyleSheet, Platform, Appearance, StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

// Local Imports (components/types/utils)
import Colors from "../../theme/Colors";
import FlingCardStack from "./FlingCardStack";

// interface for FlingCardStackScreen component
export interface FlingCardStackScreenProps {}

// Constants
const BACKGROUND_COLOR = "dodgerblue";

// functional component for FlingCardStackScreen
function FlingCardStackScreen(props: FlingCardStackScreenProps) {
  // Destructuring props
  const {} = props;

  // Change the navigation Bar color on ccomponent load
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync(BACKGROUND_COLOR);

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
    <View style={styles.container}>
      <StatusBar backgroundColor={BACKGROUND_COLOR} barStyle='light-content' />

      <FlingCardStack />
    </View>
  );
}

// exports
export default FlingCardStackScreen;

// styles for FlingCardStackScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});
