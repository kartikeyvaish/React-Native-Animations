// Packages Imports (from node_modules)
import { StyleSheet, ViewStyle, StyleProp } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// Local Imports (components/types/utils)
import AppText from "../../../components/AppText";

// interface for CardItemCounter component
export interface CardItemCounterProps {
  containerStyles?: StyleProp<ViewStyle>;
}

// functional component for CardItemCounter
function CardItemCounter(props: CardItemCounterProps) {
  // Destructuring props
  const { containerStyles } = props;

  // render
  return (
    <RectButton style={[styles.container, containerStyles]}>
      <AppText text='ADD' color='darkgreen' style={{ fontWeight: "bold" }} />
    </RectButton>
  );
}

// exports
export default CardItemCounter;

// styles for CardItemCounter
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
});
