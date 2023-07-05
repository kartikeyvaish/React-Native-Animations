// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import AppContainer from "../../../components/AppContainer";

// Local Imports (components/types/utils)

// interface for MenuScreen component
export interface MenuScreenProps {}

// functional component for MenuScreen
function MenuScreen(props: MenuScreenProps) {
  // Destructuring props
  const {} = props;

  // render
  return <AppContainer style={styles.container}></AppContainer>;
}

// exports
export default MenuScreen;

// styles for MenuScreen
const styles = StyleSheet.create({
  container: {},
});
