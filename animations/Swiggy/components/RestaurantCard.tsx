// Packages Imports (from node_modules)
import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

// Local Imports (components/types/utils)
import FoodItem from "./FoodItem";
import Seperator from "./Seperator";

// Named imports
import { Cart, RestaurantCardProps } from "../types/Types";
import { ScreenWidth } from "../../../constants/Dimensions";

// functional component for RestaurantCard
function RestaurantCard(props: RestaurantCardProps) {
  // Destructuring props
  const { items, isTrending } = props;

  const [cartItems, setCartItems] = useState<Cart>({ totalItems: 0, totalPrice: 0, cartItems: {} });

  const addItemToCart = (itemIndex: number) => {
    const item = items[itemIndex];

    if (item) {
      const updatedCartItems = { ...cartItems.cartItems };
      const updatedTotalItems = cartItems.totalItems + 1;
      const updatedTotalPrice = cartItems.totalPrice + item.price;

      let itemKey = itemIndex.toString();

      if (updatedCartItems[itemKey]) {
        updatedCartItems[itemKey] += 1;
      } else {
        updatedCartItems[itemKey] = 1;
      }

      setCartItems({
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
        cartItems: updatedCartItems,
      });
    }
  };

  const removeItemFromCart = (itemIndex: number) => {
    const item = items[itemIndex];

    if (item) {
      const updatedCartItems = { ...cartItems.cartItems };

      const updatedTotalItems = cartItems.totalItems - 1;
      const updatedTotalPrice = cartItems.totalPrice - item.price;

      let itemKey = itemIndex.toString();

      if (updatedCartItems[itemKey]) {
        updatedCartItems[itemKey] -= 1;
      } else {
        updatedCartItems[itemKey] = 0;
      }

      setCartItems({
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
        cartItems: updatedCartItems,
      });
    }
  };

  // render
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={items}
          ListHeaderComponent={
            isTrending ? (
              <View style={styles.trendingLabelContainer}>
                <MaterialCommunityIcons
                  name='lightning-bolt'
                  size={16}
                  color='purple'
                  style={styles.lightningIcon}
                />

                <Text style={styles.trendingLabel}>Trending in your city</Text>
              </View>
            ) : null
          }
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <FoodItem
              {...item}
              onIncrement={() => addItemToCart(index)}
              onDecrement={() => removeItemFromCart(index)}
              currentValue={cartItems.cartItems[index.toString()] || 0}
            />
          )}
          ItemSeparatorComponent={() => <Seperator />}
          showsVerticalScrollIndicator={false}
        />

        {cartItems.totalItems > 0 ? (
          <Animated.View style={styles.bottomContainer} entering={FadeIn} exiting={FadeIn}>
            <View style={{ flex: 1.5, flexDirection: "row" }}>
              <View style={styles.restaurantLogoContainer}></View>

              <Text style={styles.hotelName}>Rominus Pizza..</Text>
            </View>

            <RectButton
              style={{
                flex: 1,
                backgroundColor: "#60B246",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: "white" }}>
                  {cartItems.totalItems} {cartItems.totalItems > 1 ? "items" : "item"}
                </Text>
                <Text style={{ marginLeft: 5, marginRight: 5, color: "white" }}>|</Text>
                <Text style={{ color: "white" }}>$ {cartItems.totalPrice}</Text>
              </View>

              <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
                Checkout
              </Text>
            </RectButton>
          </Animated.View>
        ) : null}
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
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    paddingBottom: 20,
    paddingLeft: 10,
    elevation: 10,
    shadowColor: "white",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  restaurantLogoContainer: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
