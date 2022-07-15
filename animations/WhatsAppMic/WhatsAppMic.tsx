// Packages Imports
import { View, StyleSheet, Button } from "react-native";
import Animated from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Local Imports
import BlinkingComponent from "./components/BlinkingComponent";
import useWhatsAppMic from "./hooks/useWhatsAppMic";

// function component for WhatsAppMic
function WhatsAppMic() {
  // Custom hook that contains all the implementation
  const {
    StartRecording,
    StopRecording,
    microphoneAnimatedStyles,
    trashAnimatedStyles,
    IsRecording,
  } = useWhatsAppMic();

  // render
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        {/* Trash Icon Container */}
        <Animated.View style={[styles.iconsCommonStyles, trashAnimatedStyles]}>
          <Ionicons name="trash-bin-sharp" size={40} color="black" />
        </Animated.View>

        {/* Microphone Icon Container */}
        <BlinkingComponent shouldBlink={IsRecording} containerStyle={styles.iconsCommonStyles}>
          <Animated.View style={microphoneAnimatedStyles}>
            <Feather name="mic" size={24} color="red" />
          </Animated.View>
        </BlinkingComponent>
      </View>

      {/* Start Recording */}
      <View style={styles.buttonsContainer}>
        <Button title="Start Recording" onPress={StartRecording} color="green" />
      </View>

      {/* Stop Recording */}
      <View style={[styles.buttonsContainer, { bottom: 50 }]}>
        <Button title="Stop Recording" onPress={StopRecording} color="red" />
      </View>
    </View>
  );
}

// exports
export default WhatsAppMic;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  animationContainer: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 100,
  },
  iconsCommonStyles: {
    position: "absolute",
  },
});
