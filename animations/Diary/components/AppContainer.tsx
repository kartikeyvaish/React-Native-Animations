// Packages Imports
import { StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports
import Colors from "../theme/Colors";
import useColors from "../hooks/useColors";

// named imports
import { AppContainerProps } from "../types/ComponentTypes";

// Get both mode's background color
const darkBackground = Colors.dark.colors.background;
const lightBackground = Colors.light.colors.background;

// function component for AppContainer
function AppContainer(props: AppContainerProps) {
  // Destructuring props
  const {
    children,
    style,
    backgroundColor,
    lightBackgroundColor = lightBackground,
    darkBackgroundColor = darkBackground,
  } = props;

  // Get the theme
  const { dark } = useColors();

  // Background Change Progress Value
  // get isDark or not and interpolate the background Color based on that
  const progress = useDerivedValue(() => {
    return dark ? withTiming(1) : withTiming(0);
  }, [dark]);

  // Interpolate the background Color
  const animatedStyles = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      progress.value,
      [0, 1],
      [lightBackgroundColor, darkBackgroundColor]
    );

    return {
      backgroundColor: backgroundColor ? backgroundColor : bgColor,
    };
  });

  // Assemle the final container Styles
  const containerStyles = [styles.container, style, animatedStyles];

  // render
  return (
    <>
      <Animated.View style={containerStyles}>{children}</Animated.View>
    </>
  );
}

// exports
export default AppContainer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
