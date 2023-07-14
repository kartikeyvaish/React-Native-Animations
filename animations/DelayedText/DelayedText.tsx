// Packages Imports (from node_modules)
import { View, StyleSheet } from "react-native";
import Animated, { FadeIn, Layout } from "react-native-reanimated";

// Local Imports (components/types/utils)
import AppContainer from "../../components/AppContainer";
import useThemeManager from "../../hooks/useThemeManager";

const SAMPLE_SENTENCE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// functional component for DelayedText
function DelayedText() {
  const sentence = Array.from(SAMPLE_SENTENCE);

  const { Theme } = useThemeManager();

  // render
  return (
    <AppContainer style={styles.container}>
      <View style={styles.textContainer}>
        {sentence.map((letter, index) => {
          return (
            <Animated.Text
              style={{ color: Theme.colors.text }}
              key={index}
              layout={Layout}
              entering={FadeIn.delay(index * 10)}
            >
              {letter}
            </Animated.Text>
          );
        })}
      </View>
    </AppContainer>
  );
}

// exports
export default DelayedText;

// styles for DelayedText
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
