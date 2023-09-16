// Packages Imports
import { StyleSheet, View } from "react-native";

// Local Imports
import Dropdown from "./components/DropDown";
import { DropdownItemType } from "./types";

const MENU_OPTIONS: Array<DropdownItemType> = [
  { label: "Charts", onPress: () => console.log("Charts") },
  { label: "Book", onPress: () => console.log("Book") },
  { label: "Calendar", onPress: () => console.log("Calendar") },
  { label: "Camera", onPress: () => console.log("Camera") },
];

const header: DropdownItemType = { label: "Header" };

export default function AnimatedDropdownScreen() {
  return (
    <View style={styles.container} testID='animated-dropdown-screen-container'>
      <Dropdown header={header} options={MENU_OPTIONS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
