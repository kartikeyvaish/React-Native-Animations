// Packages Imports
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// interface for GradientCard
export interface GradientCardProps {
  width: number | string;
  height: number;
}

// function component for GradientCard
function GradientCard(props: GradientCardProps) {
  // Destructuring props
  const { width, height } = props;

  // style for the container
  const containerStyle: StyleProp<ViewStyle> = [
    {
      width,
      height,
    },
    styles.container,
  ];

  // render
  return <LinearGradient colors={["cyan", "magenta", "yellow"]} style={containerStyle} />;
}

// exports
export default GradientCard;

// styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
});
