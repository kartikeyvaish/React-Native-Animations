// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import AppText from "../../../components/AppText";
import ColorPallete from "../../../utils/ColorPallete";
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";

// interface for NumberCardProps
export interface NumberCardProps {
  number?: string;
}

// function component for NumberCard
function NumberCard(props: NumberCardProps) {
  // Destructuring props
  const { number } = props;

  // render
  return (
    <View style={[styles.numberCard]}>
      <AppText text={number} color={ColorPallete.white} size={100} />
    </View>
  );
}

// exports
export default NumberCard;

// styles
const styles = StyleSheet.create({
  numberCard: { width: ScreenWidth, height: ScreenHeight, justifyContent: "center", alignItems: "center" },
});
