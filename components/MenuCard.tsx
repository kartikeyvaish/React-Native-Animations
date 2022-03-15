// Packages Imports
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

// Local Imports
import AppText from "./AppText";
import BorderView from "./BorderView";
import { MenuCardProps } from "../types/ComponentTypes";

// function component for MenuCard
function MenuCard(props: MenuCardProps) {
  // Destructuring props
  const { title, onPress } = props;

  // Get the theme
  const { colors } = useTheme();

  // final styles for the card
  const finalStyles: StyleProp<ViewStyle> = [
    styles.container,
    {
      backgroundColor: colors.background,
    },
  ];

  // render
  return (
    <BorderView style={finalStyles}>
      <RectButton style={{ padding: 20 }} onPress={onPress} rippleColor={colors.border}>
        <AppText text={title} size={20} />
      </RectButton>
    </BorderView>
  );
}

// exports
export default MenuCard;

// styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
});
