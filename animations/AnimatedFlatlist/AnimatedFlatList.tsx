// Packages Imports
import { View, StyleSheet, FlatList, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";

// Local Imports
import { ItemProps } from "./types/Types";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./constants/Constants";

// function component for AnimatedFlatList
function AnimatedFlatList() {
  // Shared values
  const visibleItems = useSharedValue<ViewToken[]>([]);

  // callback to handle visible items changes
  const onViewableItemsChanged = (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
    visibleItems.value = info.viewableItems;
  };

  // callback for rendering item
  const renderItem = ({ item }: { item: ItemProps }) => (
    <ListItem id={item.id} visibleItems={visibleItems} />
  );

  // render
  return (
    <View style={styles.container}>
      <FlatList
        testID='animated-flatlist'
        data={SAMPLE_DATA}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  );
}

// exports
export default AnimatedFlatList;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: { paddingTop: 20 },
});
