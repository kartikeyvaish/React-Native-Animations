// Packages Imports (from node_modules)
import { useState } from "react";
import { StyleSheet } from "react-native";

// Local Imports (components/types/utils)
import AppContainer from "../../components/AppContainer";
import SwiggyScreenLoader from "./components/SwiggyScreenLoader";

// Named imports
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// interface for SwiggyScreen component
export interface SwiggyScreenProps {}

// functional component for SwiggyScreen
function SwiggyScreen(props: SwiggyScreenProps) {
  // Destructuring props
  const {} = props;

  const [shortListLoading, setShortListLoading] = useState<boolean>(true);

  // render
  return (
    <AppContainer style={styles.container}>
      {shortListLoading ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <SwiggyScreenLoader onAnimationFinish={() => setShortListLoading(false)} />
        </Animated.View>
      ) : null}
    </AppContainer>
  );
}

// exports
export default SwiggyScreen;

// styles for SwiggyScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
