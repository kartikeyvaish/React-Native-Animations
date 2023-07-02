// Packages Imports
import { View, StyleSheet, StatusBar } from "react-native";
import Animated from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../utils/ColorPallete";
import NumberCard from "./components/NumberCard";
import StartButton from "./components/StartButton";
import TimerCounter from "./components/TimerCounter";
import TimerMover from "./components/TimerMover";
import { TIMINGS } from "./constants/Constants";
import useScreen from "./hooks/useScreen";
import useTimerAnimation from "./hooks/useTimerAnimation";

// function component for AnimatedTimer
function AnimatedTimer() {
  // Use the custom hook to set navigation bar color
  useScreen();

  // Custom hook for timer animations
  const { buttonVisible, onScroll, startAnimation, timerCounter, transalteY } = useTimerAnimation();

  // render
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={ColorPallete.black} />

      <View style={styles.container}>
        {buttonVisible ? (
          <Animated.FlatList
            data={TIMINGS}
            testID='animated-timer-flatlist'
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            renderItem={({ item, index }) => <NumberCard number={item.toString()} />}
            onScroll={onScroll}
            pagingEnabled={true}
          />
        ) : null}

        <StartButton
          testID='animated-timer-start-button'
          onPress={startAnimation}
          visible={buttonVisible}
        />

        <TimerMover
          testID='animated-timer-mover-button'
          visible={!buttonVisible}
          transalteY={transalteY}
        />

        <TimerCounter
          testID='animated-timer-counter-button'
          counterValue={timerCounter}
          visible={!buttonVisible}
        />
      </View>
    </>
  );
}

// exports
export default AnimatedTimer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallete.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
