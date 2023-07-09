// Packages Imports (from node_modules)
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

// interface for FoodSymbol component
export interface FoodSymbolProps {
  color?: string;
}

// functional component for FoodSymbol
function FoodSymbol(props: FoodSymbolProps) {
  // Destructuring props
  const { color = "darkgreen" } = props;

  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      borderColor: color,
    },
  ];

  const innerStyle: StyleProp<ViewStyle> = [
    styles.innerCircle,
    {
      backgroundColor: color,
    },
  ];

  // render
  return (
    <View style={containerStyle}>
      <View style={innerStyle} />
    </View>
  );
}

// exports
export default FoodSymbol;

// styles for FoodSymbol
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  innerCircle: {
    flex: 1,
    borderRadius: 10,
  },
});
