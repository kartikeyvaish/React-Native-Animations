// Packages Imports
import { StyleSheet, TextInput, TextInputProps } from "react-native";

// Local Imports
import useColors from "../hooks/useColors";

// interface for AppTextInput
export interface AppTextInputProps extends TextInputProps {}

// function component for AppTextInput
function AppTextInput(props: AppTextInputProps) {
  // Destructuring props
  const { style, ...otherProps } = props;

  // Theme
  const { colors } = useColors();

  // render
  return (
    <TextInput
      style={[{ fontSize: 16, color: colors?.text }, style]}
      placeholderTextColor={colors?.text}
      selectionColor={colors?.primary}
      {...otherProps}
    />
  );
}

// exports
export default AppTextInput;

// styles
const styles = StyleSheet.create({
  container: {},
});
