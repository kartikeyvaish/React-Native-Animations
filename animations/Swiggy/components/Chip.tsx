// Packages Imports (from node_modules)
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

// Local Imports (components/types/utils)
import AnimatedText from "../../../components/AnimatedText";
import { ChipsProps } from "../types/Types";
import useThemeManager from "../../../hooks/useThemeManager";

// functional component for Chips
function Chips(props: ChipsProps) {
  // Destructuring props
  const { name, isSelected, onPress, containerStyles, children, color } = props;

  const containerStyle = {
    backgroundColor: isSelected ? "lightgrey" : undefined,
  };

  const { Theme } = useThemeManager();

  // render
  return (
    <Animated.View layout={Layout}>
      <RectButton style={[styles.container, containerStyles]} onPress={onPress}>
        <Animated.View style={[styles.btnInnerContainer, containerStyle]} layout={Layout}>
          {isSelected ? (
            <AnimatedText
              text='x'
              style={styles.removeIcon}
              entering={FadeIn.delay(200)}
              exiting={FadeOut}
              color={color ? color : isSelected ? (Theme.dark ? "black" : undefined) : undefined}
            />
          ) : null}

          <AnimatedText
            text={name}
            layout={Layout}
            color={color ? color : isSelected ? (Theme.dark ? "black" : undefined) : undefined}
          />

          {children}
        </Animated.View>
      </RectButton>
    </Animated.View>
  );
}

// exports
export default Chips;

// styles for Chips
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    height: 30,
    borderRadius: 100,
  },
  btnInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 100,
    flexDirection: "row",
  },
  removeIcon: {
    fontSize: 15,
    marginRight: 10,
  },
});
