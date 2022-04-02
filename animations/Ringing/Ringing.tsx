// Packages Imports
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// Local Imports
import ColorPallete from "../../utils/ColorPallete";
import { DEFAULT_RINGS_COUNT } from "./constants/Constants";
import WaveView from "./components/WaveView";

// function component for Ringing
function Ringing() {
  // render
  return (
    <View style={[styles.container, styles.center]}>
      <View style={[styles.iconContainer, styles.center]}>
        {[...Array(DEFAULT_RINGS_COUNT).keys()].map((index: number) => (
          <WaveView key={index} index={index} />
        ))}

        <Feather name="phone-outgoing" size={28} color={ColorPallete.white} />
      </View>
    </View>
  );
}

// exports
export default Ringing;

// styles
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: ColorPallete.dodgerBlue,
    borderRadius: 200,
  },
});
