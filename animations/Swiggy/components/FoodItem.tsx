// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";

// Local Imports (components/types/utils)
import AppText from "../../../components/AppText";
import FoodSymbol from "./FoodSymbol";
import { MenuItem } from "../types/Types";
import Chips from "./Chip";

// interface for Fooditem component
export interface FooditemProps extends MenuItem {}

// functional component for Fooditem
function Fooditem(props: FooditemProps) {
  // Destructuring props
  const { isVegetarian, name, currency, price } = props;

  // render
  return (
    <View style={styles.container}>
      <View style={styles.foodDetailsContainer}>
        <FoodSymbol color={isVegetarian ? "darkgreen" : "red"} />

        <AppText text={name} size={18} style={{ fontWeight: "bold" }} marginTop={5} />
        <AppText text={`${currency} ${price}`} size={16} marginTop={10} />

        <Chips
          name='More Details'
          containerStyles={{ marginLeft: 0, marginTop: 10, maxWidth: 120 }}
        />
      </View>

      <View style={styles.foodImageContainer}></View>
    </View>
  );
}

// exports
export default Fooditem;

// styles for Fooditem
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
  },
  foodDetailsContainer: {
    flex: 1,
  },
  foodImageContainer: {
    flex: 1,
  },
});
