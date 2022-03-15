// Packages Imports
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

// Local Imports
import { AppContainerProps } from "../types/ComponentTypes";
import Colors from "../theme/Colors";

// Get both mode's background color
const darkBackground = Colors.dark.colors.background;
const lightBackground = Colors.light.colors.background;

// function component for AppContainer
function AppContainer(props: AppContainerProps) {
  // Destructuring props
  const { children, style, backgroundColor } = props;

  // Get the theme
  const theme = useTheme();

  // Background Change Progress Value
  // get isDark or not and interpolate the background Color based on that
  const progress = useDerivedValue(() => {
    return theme.dark ? withTiming(1) : withTiming(0);
  }, [theme]);

  // Interpolate the background Color
  const animatedStyles = useAnimatedStyle(() => {
    const bgColor = interpolateColor(progress.value, [0, 1], [lightBackground, darkBackground]);

    return {
      backgroundColor: backgroundColor ? backgroundColor : bgColor,
    };
  });

  // Assemle the final container Styles
  const containerStyles = [styles.container, style, animatedStyles];

  // render
  return <Animated.View style={containerStyles}>{children}</Animated.View>;
}

// exports
export default AppContainer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
