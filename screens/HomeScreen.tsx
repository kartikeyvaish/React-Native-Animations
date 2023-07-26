// Packages Imports
import { FlatList } from "react-native";

// Component Imports
import AppContainer from "../components/AppContainer";
import MenuCard from "../components/MenuCard";

// Constants
import components from "../config/components";

// Named Imports
import { AppScreenProps } from "../navigation/NavigationProps";

// function component for HomeScreen
function HomeScreen({ navigation }: AppScreenProps<"HomeScreen">) {
  // render
  return (
    <AppContainer>
      <FlatList
        data={components}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <MenuCard
            title={item.name}
            onPress={() => navigation.navigate(item.screen)}
            key={item.id}
            index={index}
            colors={item.colors}
            description={item.description}
          />
        )}
      />
    </AppContainer>
  );
}

// exports
export default HomeScreen;
