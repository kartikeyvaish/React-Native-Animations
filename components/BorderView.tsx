// Packages Imports
import { useTheme } from "@react-navigation/native";
import { View, StyleProp, ViewStyle } from "react-native";

// Local Imports
import { BorderViewProps } from "../types/ComponentTypes";

// function component for BorderView
function BorderView(props: BorderViewProps) {
  // Destructuring props
  const { borderWidth = 1, borderColor, style, children } = props;

  // get the app theme
  const { colors } = useTheme();

  // final styles for the view
  const finalStyles: StyleProp<ViewStyle> = [
    {
      borderWidth: borderWidth,
      borderColor: borderColor ? borderColor : colors.border,
    },
    style,
  ];

  // render
  return <View style={finalStyles}>{children}</View>;
}

// exports
export default BorderView;
