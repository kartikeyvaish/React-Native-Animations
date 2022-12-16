// Packages Imports
import { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

// Local Imports
import ColorPallete from "../../../utils/ColorPallete";

// interface for StartButton
export interface StartButtonProps {
  onPress?: () => void;
  visible?: boolean;
}

// function component for StartButton
function StartButton(props: StartButtonProps) {
  // Destructuring props
  const { onPress, visible } = props;

  // refs
  const initialRenderingDone = useRef(false);

  // run this effect only after the initial render
  useEffect(() => {
    initialRenderingDone.current = true;
  }, []);

  // render
  return (
    <>
      {visible ? (
        <Animated.View entering={initialRenderingDone.current ? SlideInDown : undefined} exiting={SlideOutDown}>
          <TouchableOpacity style={styles.container} onPress={onPress}></TouchableOpacity>
        </Animated.View>
      ) : null}
    </>
  );
}

// exports
export default StartButton;

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPallete.red,
    width: 75,
    height: 75,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 100,
    elevation: 10,
  },
});
