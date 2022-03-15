// Packages Imports
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

// Local Imports
import AppContainer from "./AppContainer";
import { AppScrollContainerProps } from "../types/ComponentTypes";

// function component for AppScrollContainer
function AppScrollContainer(props: AppScrollContainerProps) {
  // Destructuring props
  const { children, style, backgroundColor, onRefresh, refreshing = false, ...otherProps } = props;

  // Assemle the final container Styles
  const containerStyles = [styles.container, style];

  // render
  return (
    <AppContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={containerStyles}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="always"
        {...(onRefresh
          ? { refreshControl: <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }
          : {})}
        {...otherProps}
      >
        {children}
      </ScrollView>
    </AppContainer>
  );
}

// exports
export default AppScrollContainer;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
