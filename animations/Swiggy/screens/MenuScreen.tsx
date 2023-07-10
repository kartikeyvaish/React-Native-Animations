// Packages Imports (from node_modules)
import { useState } from "react";
import { StyleSheet, FlatList, View, Platform } from "react-native";
import Animated, {
  SlideInRight,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import Chips from "../components/Chip";
import DetailsSheet from "../components/DetailsSheet";
import DetailsSheetProvider from "../providers/DetailsSheetProvider";
import Dots from "../components/Dots";
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

  const scrollProgress = useSharedValue(0);

  const triggerHaptics = () => {
    if (Platform.OS === "android") return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const selectItem = (item: FilterItemProps | null) => {
    setSelectedFilterItem(item);
    triggerHaptics();
  };

  const onScroll = useAnimatedScrollHandler(event => {
    scrollProgress.value = event.contentOffset.x;
  });

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

        <View style={styles.dotsContainer}>
          {new Array(NEW_RESTAURANTS.length * 2).fill(0).map((item, index) => (
            <Dots
              index={index}
              scrollProgress={scrollProgress}
              totalItems={NEW_RESTAURANTS.length * 2}
              key={item.id + index.toString()}
            />
          ))}
        </View>

        <Animated.View style={{ flex: 1 }}>
          <Animated.FlatList
            data={[...NEW_RESTAURANTS, ...NEW_RESTAURANTS]}
            keyExtractor={(item, index) => item.id + index.toString()}
            horizontal={true}
            renderItem={({ item }) => <RestaurantCard {...item} />}
            pagingEnabled={true}
            entering={SlideInRight.springify().delay(200)}
            onScroll={onScroll}
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
  dotsContainer: {
    marginTop: 15,
    alignSelf: "center",
    height: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
