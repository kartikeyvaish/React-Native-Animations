// Packages Imports
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Local Imports
import ListItem from "./components/ListItem";

// Sample Array of Items
const ITEMS_COUNT = 20;
const SAMPLE_ITEMS = new Array(ITEMS_COUNT).fill(0).map((_, i) => i);

// function component for ListRemover
function ListRemover() {
  // Local States
  const [Items, SetItems] = useState(SAMPLE_ITEMS);

  const removeItem = (index: number) => {
    const newItems = [...Items];
    newItems.splice(index, 1);
    SetItems(newItems);
  };

  // render
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {Items.map((item, i) => (
        <ListItem key={item.toString()} index={i} onRemove={removeItem} />
      ))}
    </ScrollView>
  );
}

// exports
export default ListRemover;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
});
