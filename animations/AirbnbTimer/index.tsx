// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

// Local Imports (components/types/utils)
import AppContainer from "../../components/AppContainer";
import constants from "./constants";
import Timer from "./Timer";

// interface for AirbnbTimerScreen component
export interface AirbnbTimerScreenProps {}

// functional component for AirbnbTimerScreen
function AirbnbTimerScreen(props: AirbnbTimerScreenProps) {
  // Destructuring props
  const {} = props;

  // render
  return (
    <AppContainer style={styles.container}>
      <View style={styles.card} testID="airbnb-timer-card">
        <Image
          source={{ uri: constants.CARD_WALLPAPER }}
          style={styles.image}
        />

        <View style={styles.timerContainer}>
          <Timer />
        </View>
      </View>
    </AppContainer>
  );
}

// exports
export default AirbnbTimerScreen;

// styles for AirbnbTimerScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  timerContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
