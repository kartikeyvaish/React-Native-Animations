// Packages Imports
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

// Local Imports
import Mover from "./Mover";

// For first mover
let moverCount = 3;
let moverWidthOne = 20;
let moverOneRemain = (100 - moverWidthOne * moverCount) / (moverCount - 1);
const firstMoverLefts = new Array(3).fill(0).map((_, index) => {
  return index * moverWidthOne + index * moverOneRemain;
});

// For second mover
let moverWidthTwo = 17;
let moverTwoRemain = (100 - moverWidthTwo * moverCount) / (moverCount - 1);
const secondMoverLefts = new Array(3).fill(0).map((_, index) => {
  return index * moverWidthTwo + index * moverTwoRemain;
});

// For third mover
let moverWidthThree = 15;
let moverThreeRemain = (100 - moverWidthThree * moverCount) / (moverCount - 1);
const thirdMoverLefts = new Array(3).fill(0).map((_, index) => {
  return index * moverWidthThree + index * moverThreeRemain;
});

// interface for BlockProps
export interface BlockProps {
  onMenuPress: (index: number) => void;
  currentSelected: number;
}

// function component for Block
function Block(props: BlockProps) {
  // Destructuring props
  const { onMenuPress, currentSelected = 0 } = props;

  // render
  return (
    <>
      <Animated.View style={{ flex: 1 }}>
        <Animated.View style={styles.rowContainer}>
          {new Array(3).fill(0).map((_, index) => (
            <Animated.View key={index} style={[{ width: "20%" }, styles.slice]} />
          ))}
          <Mover left={firstMoverLefts[currentSelected]} />
        </Animated.View>

        <Animated.View style={styles.rowContainer}>
          {new Array(3).fill(0).map((_, index) => (
            <Animated.View key={index} style={[{ width: "18%" }, styles.slice]}></Animated.View>
          ))}
          <Mover width={18} left={secondMoverLefts[currentSelected]} delay={50} />
        </Animated.View>

        <Animated.View style={styles.rowContainer}>
          {new Array(3).fill(0).map((_, index) => (
            <Animated.View key={index} style={[{ width: "16%" }, styles.slice]}></Animated.View>
          ))}
          <Mover width={16} left={thirdMoverLefts[currentSelected]} delay={100} />
        </Animated.View>
      </Animated.View>

      <Animated.View style={styles.pressContainer}>
        {new Array(3).fill(0).map((_, index) => (
          <Pressable key={index} style={{ flex: 1 }} onPress={() => onMenuPress(index)} />
        ))}
      </Animated.View>
    </>
  );
}

// exports
export default Block;

// styles
const styles = StyleSheet.create({
  container: {},
  firstMover: {
    position: "absolute",
    width: "20%",
    height: "100%",
    backgroundColor: "red",
  },
  secondMover: {
    width: "17%",
  },
  thirdMover: {
    width: "14%",
  },
  rowContainer: {
    backgroundColor: "transparent",
    height: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  slice: {
    height: "100%",
    backgroundColor: "#000000",
  },
  pressContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    flexDirection: "row",
  },
});
