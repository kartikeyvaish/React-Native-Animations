// Packages Imports (from node_modules)
import { StyleSheet, ViewStyle, StyleProp, View, Text, Pressable } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";

// Local Imports (components/types/utils)
import AnimatedText from "../../../components/AnimatedText";

// interface for CardItemCounter component
export interface CardItemCounterProps {
  containerStyles?: StyleProp<ViewStyle>;
  onIncrement?: () => void;
  onDecrement?: () => void;
  currentValue?: number;
}

// functional component for CardItemCounter
function CardItemCounter(props: CardItemCounterProps) {
  // Destructuring props
  const { containerStyles, onIncrement, onDecrement, currentValue = 0 } = props;

  // render
  return (
    <Pressable
      style={[styles.container, containerStyles]}
      onPress={currentValue < 1 ? onIncrement : undefined}
    >
      {currentValue < 1 ? (
        <AnimatedText
          entering={FadeIn}
          exiting={FadeOut.duration(50)}
          text='ADD'
          color='darkgreen'
          style={{ fontWeight: "bold" }}
        />
      ) : (
        <>
          <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{ flex: 1.5 }}>
            <Pressable style={styles.pressable} onPress={onDecrement}>
              <FontAwesome name='minus' size={12} color='darkgreen' />
            </Pressable>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(50)} style={[styles.pressable, { flex: 2 }]}>
            <Text style={{ color: "darkgreen", fontWeight: "bold" }}>{currentValue}</Text>
          </Animated.View>

          <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{ flex: 1.5 }}>
            <Pressable style={styles.pressable} onPress={onIncrement}>
              <FontAwesome name='plus' size={12} color='darkgreen' />
            </Pressable>
          </Animated.View>
        </>
      )}
    </Pressable>
  );
}

// exports
export default CardItemCounter;

// styles for CardItemCounter
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    minHeight: 30,
    flexDirection: "row",
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
