// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";

// Local Imports (components/types/utils)
import AnimatedOTPInput from "./AnimatedOTPInput";
import AppContainer from "../../components/AppContainer";

// interface for AnimatedOTPInputScreen component
export interface AnimatedOTPInputScreenProps {}

// functional component for AnimatedOTPInputScreen
function AnimatedOTPInputScreen(props: AnimatedOTPInputScreenProps) {
  // Destructuring props
  const {} = props;

  // render
  return (
    <AppContainer style={styles.container}>
      <AnimatedOTPInput />
    </AppContainer>
  );
}

// exports
export default AnimatedOTPInputScreen;

// styles for AnimatedOTPInputScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
