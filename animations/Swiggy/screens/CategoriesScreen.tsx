// Packages Imports (from node_modules)
import { View, StyleSheet, Text } from "react-native";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import FetchingRestaurantsLoader from "../components/FetchingRestaurantsLoader";

// interface for CategoriesScreen component
export interface CategoriesScreenProps {}

// functional component for CategoriesScreen
function CategoriesScreen(props: CategoriesScreenProps) {
  // Destructuring props
  const {} = props;

  // render
  return (
    <AppContainer style={styles.container}>
      <FetchingRestaurantsLoader />
    </AppContainer>
  );
}

// exports
export default CategoriesScreen;

// styles for CategoriesScreen
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
