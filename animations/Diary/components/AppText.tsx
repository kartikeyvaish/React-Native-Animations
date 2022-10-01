// Packages Imports
import { StyleProp, TextStyle, View, ViewStyle, Text } from "react-native";

// Local Imports
import { AppTextProps } from "../types/ComponentTypes";
import useColors from "../hooks/useColors";

// function component for AppText
function AppText(props: AppTextProps) {
  // Destructuring props
  const {
    text,
    color,
    size = 14,
    style,
    family,
    marginLeft,
    marginBottom,
    marginRight,
    marginTop,
    margin,
    weight = "normal",
    containerStyle,
    ...otherProps
  } = props;

  const { colors } = useColors();

  // Assemble textStyles
  const finalStyles: StyleProp<TextStyle> = [
    {
      color: color ? color : colors?.text,
      fontSize: size,
      fontFamily: family,
      fontWeight: weight,
    },
    style,
  ];

  const viewStyle: StyleProp<ViewStyle> = [
    {
      marginLeft,
      marginBottom,
      marginRight,
      marginTop,
      margin,
      overflow: "visible",
      backgroundColor: "transparent",
    },
    containerStyle,
  ];

  // if no text, return null
  if (!text) return null;

  // render
  return (
    <View style={viewStyle}>
      <Text style={finalStyles} {...otherProps}>
        {text}
      </Text>
    </View>
  );
}

// exports
export default AppText;
