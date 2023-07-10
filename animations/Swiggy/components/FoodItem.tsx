// Packages Imports (from node_modules)
import { View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Local Imports (components/types/utils)
import AppText from "../../../components/AppText";
import CardItemCounter from "./CardItemCounter";
import Chips from "./Chip";
import FoodSymbol from "./FoodSymbol";

// Named imports
import { MenuItem } from "../types/Types";

// interface for FoodItem component
export interface FoodItemProps extends MenuItem {}

// functional component for FoodItem
function FoodItem(props: FoodItemProps) {
  // Destructuring props
  const { isVegetarian, name, currency, price, image, isCustomizable } = props;

  // render
  return (
    <View style={styles.container}>
      <View style={styles.foodDetailsContainer}>
        <FoodSymbol color={isVegetarian ? "darkgreen" : "red"} />

        <AppText text={name} size={18} style={{ fontWeight: "bold" }} marginTop={5} color='black' />
        <AppText text={`${currency} ${price}`} size={16} marginTop={10} color='black' />

        <Chips name='More Details' containerStyles={styles.moreDetailsChipContainer} color='black'>
          <AntDesign name='right' size={10} color='black' style={{ marginTop: 2, marginLeft: 5 }} />
        </Chips>
      </View>

      <View style={styles.foodImageContainer}>
        <Image source={{ uri: image }} style={styles.foodItemImage} />
        <CardItemCounter containerStyles={{ position: "absolute", bottom: -10 }} />
        {isCustomizable ? <AppText text='Customizable' style={styles.customizableText} /> : null}
      </View>
    </View>
  );
}

// exports
export default FoodItem;

// styles for FoodItem
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    paddingBottom: 60,
  },
  foodDetailsContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  foodImageContainer: {
    flex: 1,
    alignItems: "center",
  },
  foodItemImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  customizableText: {
    position: "absolute",
    bottom: -35,
    color: "grey",
    fontSize: 12,
  },
  moreDetailsChipContainer: {
    marginLeft: 0,
    marginTop: 10,
    maxWidth: 120,
  },
});
