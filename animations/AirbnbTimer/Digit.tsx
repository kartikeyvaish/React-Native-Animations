// Packages Imports (from node_modules)
import { StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

// Local Imports (components/types/utils)
import ColorPallete from "../../utils/ColorPallete";

// interface for Digit component
export interface DigitProps {
  digit: number | string;
}

const DIGITS: { [key: number]: string } = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};

// functional component for Digit
function Digit(props: DigitProps) {
  // Destructuring props
  const { digit } = props;

  // render
  return (
    <Animated.Text
      style={[
        styles.digitText,
        typeof digit === "number" ? styles.numberWidth : styles.colonStyles,
      ]}
      entering={FadeInDown}
      exiting={FadeOutUp}
      key={digit}
    >
      {typeof digit === "number" && DIGITS[digit] ? DIGITS[digit] : digit}
    </Animated.Text>
  );
}

// exports
export default Digit;

// styles for Digit
const styles = StyleSheet.create({
  digitText: {
    fontWeight: "bold",
    color: ColorPallete.white,
    fontSize: 25,
    zIndex: 100000,
  },
  numberWidth: {
    minWidth: 18,
    justifyContent: "center",
    alignContent: "center",
  },
  colonStyles: {
    marginLeft: 2,
    marginRight: 2,
  },
});
