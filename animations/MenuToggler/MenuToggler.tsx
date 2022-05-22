// Packages Imports
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import Animated from "react-native-reanimated";

// Local Imports
import AppContainer from "../../components/AppContainer";
import Block from "./components/Block";

// function component for MenuToggler
function MenuToggler() {
  // Local States
  const [CurrentSelected, SetCurrentSelected] = useState<number>(0);

  // get the theme
  const { dark } = useTheme();

  // decide the background color
  const backgroundColor = dark ? "#212121" : "lightgrey";

  // render
  return (
    <AppContainer style={styles.container}>
      <Animated.View style={{ width: 200 }}>
        <Animated.View style={[styles.boxContainer, { backgroundColor }]}>
          <Block onMenuPress={SetCurrentSelected} currentSelected={CurrentSelected} />
        </Animated.View>
      </Animated.View>
    </AppContainer>
  );
}

// exports
export default MenuToggler;

// styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },
});
