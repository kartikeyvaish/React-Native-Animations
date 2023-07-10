// Packages Imports (from node_modules)
import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import MenuScreenHeader from "../components/MenuScreenHeader";
import Chips from "../components/Chip";
import { FilterItemProps } from "../types/Types";
import { FOOD_CATEGORIES, RESTAURANTS } from "../mock/SwiggyMockData";
import RestaurantCard from "../components/RestaurantCard";

// interface for MenuScreen component
export interface MenuScreenProps {}

// functional component for MenuScreen
function MenuScreen(props: MenuScreenProps) {
  // Destructuring props
  const {} = props;

  const [selectedFilterItem, setSelectedFilterItem] = useState<FilterItemProps | null>(null);

  // render
  return (
    <AppContainer style={styles.container}>
      <View>
        <MenuScreenHeader headerTitle='NACHOS' />

        <FlatList
          data={FOOD_CATEGORIES}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <Chips
              name={item.name}
              isSelected={selectedFilterItem?.id === item.id}
              onPress={
                item.id === selectedFilterItem?.id
                  ? () => setSelectedFilterItem(null)
                  : () => setSelectedFilterItem(item)
              }
            />
          )}
          contentContainerStyle={{ paddingRight: 10, marginTop: 10, marginBottom: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={RESTAURANTS}
          keyExtractor={item => item.id}
          horizontal={true}
          renderItem={({ item }) => <RestaurantCard {...item} />}
          pagingEnabled={true}
        />
      </View>
    </AppContainer>
  );
}

// exports
export default MenuScreen;

// styles for MenuScreen
const styles = StyleSheet.create({
  container: {},
});
