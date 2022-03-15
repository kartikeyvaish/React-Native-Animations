// Packages Imports
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

// Components
import Analog from "./components/Analog";
import Hand from "./components/Hand";

// Utils
import ColorPallete from "../../utils/ColorPallete";

// Custom Hooks
import useClock from "./hooks/useClock";

// Constants
import { HOUR_EACH_ANGLE, MINUTE_EACH } from "./constants/Constants";
import { ScreenWidth } from "../../constants/Dimensions";

// function component for Clock
function Clock() {
  const { hoursValue, minutesValue, secondsValue, AnalogTime } = useClock();

  // Get the theme
  const { colors, dark } = useTheme();

  // Get the colors
  const backgroundColor = { backgroundColor: colors.text };

  // render
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.outerCircle,
          { backgroundColor: dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)" },
        ]}
      />
      <View
        style={[
          styles.innerCircle,
          { backgroundColor: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)" },
        ]}
      />

      <Hand
        progress={hoursValue}
        rotateEach={HOUR_EACH_ANGLE}
        style={[styles.hourHand, backgroundColor]}
      />
      <Hand
        progress={minutesValue}
        rotateEach={MINUTE_EACH}
        style={[styles.minuteHand, backgroundColor]}
      />
      <Hand
        progress={secondsValue}
        rotateEach={MINUTE_EACH}
        style={[styles.secondHand, backgroundColor]}
      />
      <View style={styles.centerDot} />

      <View style={styles.AnalogClockContainer}>
        <Analog currentTime={AnalogTime} />
      </View>
    </View>
  );
}

// exports
export default Clock;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerDot: {
    width: 20,
    height: 20,
    backgroundColor: ColorPallete.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  hourHand: {
    width: 8,
    height: "35%",
    marginTop: "15%",
    borderRadius: 4,
  },
  minuteHand: {
    width: 5,
    height: "45%",
    marginTop: "5%",
    borderRadius: 3,
  },
  secondHand: {
    width: 1,
    height: "50%",
    borderRadius: 2,
  },
  outerCircle: {
    width: ScreenWidth * 0.9,
    height: ScreenWidth * 0.9,
    borderRadius: ScreenWidth * 0.9,
    position: "absolute",
  },
  innerCircle: {
    width: ScreenWidth * 0.6,
    height: ScreenWidth * 0.6,
    borderRadius: ScreenWidth * 0.6,
    position: "absolute",
  },
  AnalogClockContainer: {
    position: "absolute",
    top: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
