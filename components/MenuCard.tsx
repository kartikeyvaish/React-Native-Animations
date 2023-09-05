// Packages Imports
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

// Local Imports
import AppText from "./AppText";
import BorderView from "./BorderView";

// Named imports
import { MenuCardProps } from "../types/ComponentTypes";
import { ScreenWidth } from "../constants/Dimensions";

// function component for MenuCard
function MenuCard(props: MenuCardProps) {
  // Destructuring props
  const { title, onPress, index, colors: linearGradientColors, description = "" } = props;

  // Get the theme
  const { colors } = useTheme();

  // final styles for the card
  const finalStyles: StyleProp<ViewStyle> = [
    {
      backgroundColor: colors.background,
    },
    styles.borderViewContainer,
  ];

  // render
  return (
    <Animated.View
      style={styles.container}
      entering={
        index % 2 === 0
          ? SlideInLeft.springify().delay(Math.min(index * 100, 1000))
          : SlideInRight.springify().delay(Math.min(index * 100, 1000))
      }
    >
      <BorderView style={finalStyles} borderWidth={0}>
        <LinearGradient colors={linearGradientColors} style={styles.linearGradientContainer}>
          <>
            <AppText
              style={{ fontWeight: "bold" }}
              text={title}
              size={18}
              adjustsFontSizeToFit
              numberOfLines={2}
              color='white'
            />

            <AppText
              text={description}
              size={14}
              adjustsFontSizeToFit
              numberOfLines={8}
              marginTop={10}
              color='white'
            />
          </>
        </LinearGradient>

        <RectButton style={styles.rippleContainer} onPress={onPress} rippleColor={colors.border} />
      </BorderView>
    </Animated.View>
  );
}

// exports
export default MenuCard;

// styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ScreenWidth / 2,
    height: ScreenWidth / 2,
    padding: 10,
  },
  linearGradientContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    overflow: "hidden",
    padding: 10,
  },
  rippleContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    overflow: "hidden",
  },
  borderViewContainer: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    paddingTop: 10,
    paddingLeft: 10,
  },
});
