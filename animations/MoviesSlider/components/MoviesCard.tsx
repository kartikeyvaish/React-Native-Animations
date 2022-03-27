// Packages Imports
import { View, StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

// Local Imports
import AppText from "./../../../components/AppText";
import { MoviesCardProps } from "../types/types";
import { ScreenWidth } from "../../../constants/Dimensions";

// Constants
import { ITEM_SHIFT, ITEM_SIZE, SPACING } from "../constants/Constants";

// function component for MoviesCard
function MoviesCard(props: MoviesCardProps) {
  // Destructuring props
  const { index, scrollX, poster, description, rating, title } = props;

  // get the theme
  const { colors } = useTheme();

  // animated Styles for Flatlist
  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollX.value,
      [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE],
      [ITEM_SHIFT, ITEM_SHIFT - ITEM_SHIFT, ITEM_SHIFT]
    );

    return {
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  // animated Styles for image container
  const posterContainer: StyleProp<ViewStyle> = [
    styles.posterContainer,
    {
      backgroundColor: colors.background,
    },
  ];

  // render
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cardContainer, animatedStyles]}>
        <View style={posterContainer}>
          <Image source={{ uri: poster }} style={styles.posterImage} />
        </View>

        <AppText
          text={title}
          size={20}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          marginTop={20}
          style={{ fontWeight: "bold" }}
        />

        <AppText text={`Rating : ${rating}`} marginTop={10} />

        <AppText text={description} marginTop={10} numberOfLines={3} />
      </Animated.View>
    </View>
  );
}

// exports
export default MoviesCard;

// styles
const styles = StyleSheet.create({
  container: { width: ITEM_SIZE },
  cardContainer: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: "center",
  },
  posterImage: { width: "100%", height: "100%", resizeMode: "cover", borderRadius: 20 },
  posterContainer: {
    elevation: 20,
    width: "100%",
    height: ScreenWidth * 0.9,
    borderRadius: 34,
    overflow: "hidden",
  },
});
