// Packages Imports
import Animated, { Layout } from "react-native-reanimated";

// Types Imports
import { AnimatedViewProps } from "../types/ComponentTypes";

// function component for AnimatedView
function AnimatedView(props: AnimatedViewProps) {
  // Destructuring props
  const { children, layout = Layout, layoutDisabled, style, ...otherProps } = props;

  // styles for the container
  const finalStyles = [{ flex: 1 }, style];

  // Render
  return (
    <Animated.View layout={layoutDisabled ? undefined : layout} style={finalStyles} {...otherProps}>
      {children}
    </Animated.View>
  );
}

// Exports
export default AnimatedView;
