// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import AnimatedText from "../../../components/AnimatedText";
import ColorBreathingIcon from "./ColonBreathingIcon";

// interface for Analog
export interface AnalogProps {
  currentTime: string;
}

// function component for Analog
function Analog(props: AnalogProps) {
  // Destructuring props
  const { currentTime } = props;

  // If invalid time then return null
  if (currentTime.length !== 11) return null;

  let digits = currentTime.slice(0, 8).replace(/:/g, "").split("");

  // render
  return (
    <View style={{ overflow: "hidden", flexDirection: "row" }}>
      {digits.map((digit, index) => {
        return (
          <View key={index} style={{ flexDirection: "row" }}>
            {index === 2 || index === 4 ? <ColorBreathingIcon visible={true} /> : null}

            <AnimatedText text={digit} size={40} />
          </View>
        );
      })}
      <AnimatedText text={" " + currentTime.slice(9, 11)} size={40} />
    </View>
  );
}

// exports
export default Analog;

// styles
const styles = StyleSheet.create({
  container: {},
});
