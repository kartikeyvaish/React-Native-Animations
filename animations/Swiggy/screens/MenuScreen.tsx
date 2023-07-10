// Packages Imports (from node_modules)
import { useState } from "react";
import { StyleSheet, FlatList, View, Platform } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import * as Haptics from "expo-haptics";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import Chips from "../components/Chip";
import DetailsSheet from "../components/DetailsSheet";
import DetailsSheetProvider from "../providers/DetailsSheetProvider";
import MenuScreenHeader from "../components/MenuScreenHeader";
import RestaurantCard from "../components/RestaurantCard";

// Named imports
import { FilterItemProps } from "../types/Types";
import { FOOD_CATEGORIES, NEW_RESTAURANTS } from "../mock/SwiggyMockData";
import { SwiggyScreenProps } from "../navigation/NavigationProps";

// interface for MenuScreen component
export interface MenuScreenProps {}

// functional component for MenuScreen
function MenuScreen(props: SwiggyScreenProps<"MenuScreen">) {
  // Destructuring props
  const { navigation } = props;

  const [selectedFilterItem, setSelectedFilterItem] = useState<FilterItemProps | null>(null);

  const triggerHaptics = () => {
    if (Platform.OS === "android") return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const selectItem = (item: FilterItemProps | null) => {
    setSelectedFilterItem(item);
    triggerHaptics();
  };

  // render
  return (
    <AppContainer style={styles.container}>
      <DetailsSheetProvider>
        <View>
          <MenuScreenHeader headerTitle='NACHOS' onBackPress={() => navigation.goBack()} />

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
                    ? () => selectItem(null)
                    : () => selectItem(item)
                }
              />
            )}
            contentContainerStyle={{ paddingRight: 10, marginTop: 10, marginBottom: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Animated.View style={{ flex: 1 }}>
          <Animated.FlatList
            data={[...NEW_RESTAURANTS, ...NEW_RESTAURANTS]}
            keyExtractor={(item, index) => item.id + index.toString()}
            horizontal={true}
            renderItem={({ item }) => <RestaurantCard {...item} />}
            pagingEnabled={true}
            entering={SlideInRight.springify().delay(200)}
          />
        </Animated.View>

        <DetailsSheet />
      </DetailsSheetProvider>
    </AppContainer>
  );
}

// exports
export default MenuScreen;

// styles for MenuScreen
const styles = StyleSheet.create({
  container: {},
});
