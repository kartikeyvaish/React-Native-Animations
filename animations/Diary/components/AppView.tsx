// Packages Imports
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";

// Local imports
import useColors from "../hooks/useColors";

// function component for AppView
function AppView(props: ViewProps) {
  // Destructuring props
  const { style, ...otherProps } = props;

  // get the theme
  const { colors } = useColors();

  // Assemble the styles
  const containerStyles: StyleProp<ViewStyle> = [{ backgroundColor: colors?.background }, style];

  // render
  return <View style={containerStyles} {...otherProps}></View>;
}

// exports
export default AppView;
