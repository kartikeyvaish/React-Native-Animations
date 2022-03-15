// Packages Imports
import { Text, StyleProp, TextStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

// Local Imports
import { AppTextProps } from "../types/ComponentTypes";

// function component for AppText
function AppText(props: AppTextProps) {
  // Destructuring props
  const {
    text,
    color,
    size,
    style,
    family,
    marginLeft,
    marginBottom,
    marginRight,
    marginTop,
    margin,
    ...otherProps
  } = props;

  const { colors } = useTheme();

  // Assemble textStyles
  const finalStyles: StyleProp<TextStyle> = [
    {
      color: color ? color : colors.text,
      fontSize: size,
      fontFamily: family,
      marginLeft,
      marginBottom,
      marginRight,
      marginTop,
      margin,
    },
    style,
  ];

  // if no text, return null
  if (!text) return null;

  // render
  return (
    <Text style={finalStyles} {...otherProps}>
      {text}
    </Text>
  );
}

// exports
export default AppText;
