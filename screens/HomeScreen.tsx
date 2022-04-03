// Packages Imports
import { FlatList, StyleSheet } from "react-native";

// Local Imports
import AppContainer from "../components/AppContainer";
import { AppScreenProps } from "../navigation/NavigationProps";
import components from "../config/components";
import MenuCard from "../components/MenuCard";

// function component for HomeScreen
function HomeScreen({ navigation }: AppScreenProps<"HomeScreen">) {
  // render
  return (
    <AppContainer style={styles.container}>
      <FlatList
        data={components}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MenuCard
            title={item.name}
            onPress={() => navigation.navigate(item.screen)}
            key={item.id}
          />
        )}
      />
    </AppContainer>
  );
}

// exports
export default HomeScreen;

// styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
