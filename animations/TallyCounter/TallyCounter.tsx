// Packages Imports
import { View, StyleSheet, Pressable, Text, StyleProp, ViewStyle, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

// Local Imports
import useCounter from "./hooks/useCounter";
import usePanHandler from "./hooks/usePanHandler";

// Constants
const COUNTER_WIDTH = Dimensions.get("screen").width * 0.45;
const COUNTER_HEIGHT = 80;

// Types
interface TallyCounterProps {
  height?: number;
  width?: number;
}

// Animated Pressable
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// function component for TallyCounter
function TallyCounter(props: TallyCounterProps) {
  // Destructuring props
  const { height = COUNTER_HEIGHT, width = COUNTER_WIDTH } = props;

  const { Counter, DecreaseCounter, IncreaseCounter } = useCounter();
  const { AnimatedMinusIconStyles, AnimatedPlusIconStyles, AnimatedScrollHandler, AnimatedStyles } =
    usePanHandler({ width, height, IncreaseCounter, DecreaseCounter });

  // style for container
  const counterContainerStyles: StyleProp<ViewStyle> = [
    styles.counterContainer,
    { width: height - 20, height: height - 20, borderRadius: height / 2 },
  ];

  // render
  return (
    <View style={styles.container}>
      <View style={[styles.tallyCounterContainer, { height, width }]}>
        <AnimatedPressable style={[styles.icon, AnimatedMinusIconStyles]} onPress={DecreaseCounter}>
          <AntDesign name="minus" size={24} color="white" />
        </AnimatedPressable>

        <PanGestureHandler onGestureEvent={AnimatedScrollHandler}>
          <Animated.View style={[styles.middleContainer, AnimatedStyles]}>
            <View style={counterContainerStyles}>
              <Text style={styles.counterText}>{Counter}</Text>
            </View>
          </Animated.View>
        </PanGestureHandler>

        <AnimatedPressable style={[styles.icon, AnimatedPlusIconStyles]} onPress={IncreaseCounter}>
          <AntDesign name="plus" size={24} color="white" />
        </AnimatedPressable>
      </View>
    </View>
  );
}

// exports
export default TallyCounter;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121",
  },
  icon: { flex: 1, justifyContent: "center", alignItems: "center" },
  tallyCounterContainer: {
    borderRadius: 100,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "black",
  },
  counterText: { color: "white", fontSize: 30 },
  counterContainer: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
