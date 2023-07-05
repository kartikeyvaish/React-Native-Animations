// Packages Imports (from node_modules)
import { useState } from "react";
import { StyleSheet } from "react-native";

// Local Imports (components/types/utils)
import AppContainer from "../../components/AppContainer";
import SwiggyScreenLoader from "./components/SwiggyScreenLoader";

// Named imports
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SwiggyScreenProps } from "./navigation/NavigationProps";

// functional component for SwiggyScreen
function SwiggyScreen(props: SwiggyScreenProps<"HomeScreen">) {
  // Destructuring props
  const { navigation } = props;

  const [shortListLoading, setShortListLoading] = useState<boolean>(true);

  const goToCategoriesScreen = () => {
    setShortListLoading(false);
    navigation.replace("CategoriesScreen");
  };

  // render
  return (
    <AppContainer style={styles.container}>
      {shortListLoading ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <SwiggyScreenLoader onAnimationFinish={goToCategoriesScreen} />
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
