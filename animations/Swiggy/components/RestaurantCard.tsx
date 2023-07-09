// Packages Imports (from node_modules)
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Local Imports (components/types/utils)
import { RestaurantCardProps } from "../types/Types";
import { ScreenWidth } from "../../../constants/Dimensions";
import FoodItem from "./FoodItem";
import { RESTAURANTS } from "../mock/SwiggyMockData";

// functional component for RestaurantCard
function RestaurantCard(props: RestaurantCardProps) {
  // Destructuring props
  const {} = props;

  // render
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.trendingLabelContainer}>
          <MaterialCommunityIcons
            name='lightning-bolt'
            size={16}
            color='purple'
            style={styles.lightningIcon}
          />

          <Text style={styles.trendingLabel}>Trending in your city</Text>
        </View>

        <FoodItem {...RESTAURANTS[0].items[0]} />
      </View>
    </View>
  );
}

// exports
export default RestaurantCard;

// styles for RestaurantCard
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: ScreenWidth,
    height: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  trendingLabelContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  trendingLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "purple",
  },
  lightningIcon: {
    marginRight: 5,
    marginTop: 2,
  },
});
