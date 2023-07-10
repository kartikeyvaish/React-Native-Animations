// Packages Imports (from node_modules)
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Local Imports (components/types/utils)
import { Restaurant } from "../types/Types";

// interface for RestaurantInfoCard component
export interface HotelInfoCardProps extends Restaurant {}

// functional component for RestaurantInfoCard
function RestaurantInfoCard(props: HotelInfoCardProps) {
  // Destructuring props
  const {
    restaurantName,
    rating,
    ratingCountText,
    location,
    deliveryDuration,
    discountText,
    distance,
  } = props;

  // render
  return (
    <View style={styles.container} testID='restaurant-info-card-container-test-id'>
      <View style={[styles.rowContainer]}>
        <Text testID='rest-info-card-name-test-id' style={styles.restaurantNameText}>
          {restaurantName}
        </Text>

        <View style={styles.rowContainer}>
          <MaterialIcons name='stars' size={24} color='darkgreen' style={{ marginRight: 5 }} />
          <Text
            testID='rest-info-card-rating-test-id'
            style={styles.boldText}
          >{`${rating} (${ratingCountText})`}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.locationText} testID='rest-info-card-location-distance-test-id'>
          {location}, {distance}
        </Text>
        <Text testID='rest-info-card-duration-test-id' style={styles.boldText}>
          {deliveryDuration}
        </Text>
      </View>

      <Text testID='rest-info-card-discount-test-id' style={styles.locationText}>
        {discountText}
      </Text>
    </View>
  );
}

// exports
export default RestaurantInfoCard;

// styles for RestaurantInfoCard
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantNameText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  boldText: {
    fontWeight: "700",
    fontSize: 14,
  },
  locationText: {
    fontSize: 14,
    color: "grey",
    marginTop: 5,
  },
});
