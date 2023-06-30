// Packages Imports (from node_modules)
import { ReactNode, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { MotiView } from "moti";
import { RectButton } from "react-native-gesture-handler";

// Local Imports (components/types/utils)
import AppText from "../../components/AppText";
import { useTheme } from "@react-navigation/native";

// Constants
const DIGIT_SIZE = 70;
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "VOID", "0", "DEL"];
const SPACING_VERTICAL = 8;
const OTP_LENGTH = 4;

interface DigitItemProps {
  /**
   * digit to be displayed
   */
  digit: string;

  /**
   * Function to be called when digit is pressed
   * @returns void
   */
  onPress?: () => void;
}

interface RippleCircleButtonProps {
  /**
   * Function to be called when button is pressed
   * @returns void
   */
  onPress?: () => void;

  /**
   * Children to be rendered inside the button
   */
  children?: ReactNode;
}

// Functional component for a ripple circle button
export function RippleCircleButton(props: RippleCircleButtonProps) {
  // Destructuring props
  const { children, onPress } = props;

  return (
    <View style={styles.digitContainer} testID='animated-ripple-button-otp'>
      <RectButton
        style={styles.rippleButton}
        onPress={onPress}
        testID='animated-input-ripple-circle-button'
      >
        {children}
      </RectButton>
    </View>
  );
}

// Function component for a digit item
export function DigitItem(props: DigitItemProps) {
  // Destrcuturing props
  const { digit, onPress } = props;

  return (
    <RippleCircleButton onPress={onPress}>
      <AppText text={digit} style={styles.digitText} testID={`digit-${digit}`} />
    </RippleCircleButton>
  );
}

// Functional component for AnimatedOTPInput
function AnimatedOTPInput() {
  // Local States
  const [code, setCode] = useState<Array<number>>([]);

  // Get the theme
  const { colors } = useTheme();

  const digitStyles = {
    backgroundColor: colors.text,
  };

  const renderItem = ({ item }: { item: string; index: number }) => {
    if (item === "VOID") return <View style={styles.voidContainer} />;

    if (item === "DEL")
      return (
        <RippleCircleButton
          onPress={() => {
            Haptics.selectionAsync();

            if (code.length > 0) {
              setCode(prev => prev.slice(0, prev.length - 1));
            }
          }}
        >
          <Feather name='delete' size={24} color='grey' />
        </RippleCircleButton>
      );

    return (
      <DigitItem
        digit={item}
        onPress={() => {
          Haptics.selectionAsync();

          if (code.length < OTP_LENGTH) {
            setCode(prev => [...prev, parseInt(item)]);
          }
        }}
      />
    );
  };

  // render
  return (
    <View testID='animated-otp-input'>
      <View style={styles.otpContainer}>
        {new Array(OTP_LENGTH).fill(0).map((_, index) => (
          <MotiView
            key={index.toString()}
            style={[styles.digitItem, digitStyles]}
            animate={{
              height: code.length > index ? 30 : 2,
              marginBottom: code.length > index ? 15 : 0,
            }}
            transition={{ type: "timing", duration: 200 }}
          />
        ))}
      </View>

      <FlatList
        data={NUMBERS}
        keyExtractor={(_, item) => item.toString()}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
}

// exports
export default AnimatedOTPInput;

// styles for AnimatedOTPInput
const styles = StyleSheet.create({
  digitContainer: {
    width: DIGIT_SIZE,
    height: DIGIT_SIZE,
    borderRadius: DIGIT_SIZE,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  rippleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: DIGIT_SIZE,
  },
  voidContainer: {
    width: DIGIT_SIZE,
    height: DIGIT_SIZE,
    borderRadius: DIGIT_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  columnWrapperStyle: {
    justifyContent: "space-evenly",
    marginVertical: SPACING_VERTICAL,
    paddingLeft: SPACING_VERTICAL,
    paddingRight: SPACING_VERTICAL,
  },
  digitText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  digitItem: {
    width: 30,
    borderRadius: 30,
  },
  otpContainer: {
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    alignItems: "flex-end",
  },
});
