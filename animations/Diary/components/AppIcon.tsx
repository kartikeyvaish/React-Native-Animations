// Packages imports
import { ActivityIndicator } from "react-native";

// Icons Imports
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Configs/Constants and Types
import { AppIconProps } from "../types/ComponentTypes";
import IconNames from "../constants/IconNames";
import useColors from "../hooks/useColors";

// Icon component
function AppIcon(props: AppIconProps) {
  // Destructuring props
  const {
    family,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    style,
    onPress,
    loading,
    color,
    margin,
    ...otherProps
  } = props;

  // Theme Manager
  const { colors } = useColors();

  // Get Icon Color
  const IconColor = color ? color : colors?.text;

  const marginStyles = {
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };

  // Icon Component Props
  const finalProps = {
    color: IconColor,
    onPress: onPress,
    style: [marginStyles, style],
    ...otherProps,
  };

  // if loading prop is true then show the loading indicator
  if (loading)
    return (
      <>
        <ActivityIndicator color={IconColor} size={"small"} style={marginStyles} />
      </>
    );

  // return the icon component based on the name
  switch (family) {
    case IconNames.AntDesign:
      return <AntDesign {...finalProps} />;
    case IconNames.Entypo:
      return <Entypo {...finalProps} />;
    case IconNames.EvilIcons:
      return <EvilIcons {...finalProps} />;
    case IconNames.Feather:
      return <Feather {...finalProps} />;
    case IconNames.FontAwesome:
      return <FontAwesome {...finalProps} />;
    case IconNames.FontAwesome5:
      return <FontAwesome5 {...finalProps} />;
    case IconNames.Foundation:
      return <Foundation {...finalProps} />;
    case IconNames.Ionicons:
      return <Ionicons {...finalProps} />;
    case IconNames.MaterialCommunityIcons:
      return <MaterialCommunityIcons {...finalProps} />;
    case IconNames.MaterialIcons:
      return <MaterialIcons {...finalProps} />;
    default:
      return null;
  }
}

// Exports
export default AppIcon;
