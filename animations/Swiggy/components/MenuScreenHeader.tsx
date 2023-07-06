// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

// Local Imports (components/types/utils)
import AnimatedText from "../../../components/AnimatedText";
import { MenuScreenHeaderProps } from "../types/Types";

// functional component for MenuScreenHeader
function MenuScreenHeader(props: MenuScreenHeaderProps) {
  // Destructuring props
  const { onBackPress, headerTitle } = props;

  // render
  return (
    <View style={styles.container}>
      <RectButton style={styles.backBtnContainer} onPress={onBackPress}>
        <AntDesign name='arrowleft' size={18} color='black' />
      </RectButton>

      <AnimatedText text={headerTitle} style={styles.label} entering={FadeIn} exiting={FadeOut} />
    </View>
  );
}

// exports
export default MenuScreenHeader;

// styles for MenuScreenHeader
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 22,
  },
  backBtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "lightgrey",
    borderRadius: 40,
    position: "absolute",
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 10,
  },
});
