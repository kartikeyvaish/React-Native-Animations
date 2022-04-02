// Packages Imports
import { StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated";
import { MotiView } from "moti";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";

// interface for WaveView
export interface WaveViewProps {
  index: number;
}

// function component for WaveView
function WaveView(props: WaveViewProps) {
  // Destructuring props
  const { index } = props;

  // render
  return (
    <MotiView
      key={index}
      style={styles.rippleCircles}
      from={{ opacity: 0.7, scale: 1 }}
      animate={{ opacity: 0, scale: 5 }}
      transition={{
        type: "timing",
        duration: 2000,
        easing: Easing.out(Easing.ease),
        delay: index * 400,
        loop: true,
        repeatReverse: false,
      }}
    />
  );
}

// exports
export default WaveView;

// styles
const styles = StyleSheet.create({
  container: {},
  rippleCircles: {
    backgroundColor: ColorPallete.dodgerBlue,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 200,
  },
});
