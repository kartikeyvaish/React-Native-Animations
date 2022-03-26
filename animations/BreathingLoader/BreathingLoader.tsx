// Packages Imports
import { useTheme } from "@react-navigation/native";
import { MotiView } from "moti";
import { StyleSheet } from "react-native";

// Local Imports
import AppContainer from "../../components/AppContainer";

// Default Size for the loader
const SIZE = 80;

// function component for BreathingLoader
function BreathingLoader() {
  // get the theme
  const { colors } = useTheme();

  // render
  return (
    <AppContainer style={styles.container}>
      <MotiView
        style={{ borderColor: colors.text }}
        from={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          borderWidth: 0,
          opacity: 0,
        }}
        animate={{
          width: SIZE + 20,
          height: SIZE + 20,
          borderRadius: (SIZE + 20) / 2,
          borderWidth: SIZE / 10,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true,
        }}
      />
    </AppContainer>
  );
}

// exports
export default BreathingLoader;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
