// Packages Imports
import { FlatList, StyleSheet } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";

// Local Imports
import AppContainer from "../components/AppContainer";
import components from "../config/components";
import MenuCard from "../components/MenuCard";

// Named Imports
import { AppScreenProps } from "../navigation/NavigationProps";

// function component for HomeScreen
function HomeScreen({ navigation }: AppScreenProps<"HomeScreen">) {
  // render
  return (
    <AppContainer style={styles.container}>
      <FlatList
        data={components}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Animated.View entering={SlideInRight.delay(index * 20).springify()}>
            <MenuCard
              title={item.name}
              onPress={() => navigation.navigate(item.screen)}
              key={item.id}
            />
          </Animated.View>
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
