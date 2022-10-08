// Packages Imports
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { interpolateColor, SharedValue, useAnimatedStyle } from "react-native-reanimated";

// Local Imports
import Theme from "../../../theme/Colors";

// interface for PointProps
export interface PointProps {
  onTogglePress: () => void;
  textColor: string;
  backgroundColor: string;
  isDarkProgress: SharedValue<number>;
}

// function component for Point
function Point(props: PointProps) {
  // Destructuring props
  const { onTogglePress, textColor, backgroundColor, isDarkProgress } = props;

  // Interpolate the background Color
  const animatedStyles = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      isDarkProgress.value,
      [0, 1],
      [Theme.light.colors.background, Theme.dark.colors.background]
    );

    return {
      backgroundColor: bgColor,
    };
  });

  // render
  return (
    <TouchableOpacity onPress={onTogglePress}>
      <Animated.View
        style={[styles.container, { borderColor: textColor, backgroundColor: backgroundColor }, animatedStyles]}
      >
        <Text style={{ color: textColor, textAlign: "center" }}>{`Toggle \nTheme`}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

// exports
export default Point;

// styles
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
