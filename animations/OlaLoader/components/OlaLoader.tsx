// Packages Imports (from node_modules)
import { StyleProp, ViewStyle } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// Local Imports (components/types/utils)
import RingView, { RingViewProps } from "./RingView";

// interface for OlaLoader component
export interface OlaLoaderProps extends Omit<RingViewProps, "delay"> {
  loading?: boolean;
  animationDiff?: number;
  ringCount?: number;
}

// functional component for OlaLoader
function OlaLoader(props: OlaLoaderProps) {
  // Destructuring props
  const {
    size = 100,
    loading = true,
    duration = 3000,
    animationDiff = 500,
    ringCount = 3,
    ringBorderWidth = 2,
    ringColor = "darkgreen",
  } = props;

  const containerStyles: StyleProp<ViewStyle> = [
    {
      width: size,
      height: size,
    },
  ];

  if (!loading) return null;

  // render
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={containerStyles}
      testID='ola-loader-container'
    >
      {new Array(ringCount).fill(0).map((_, index) => (
        <RingView
          key={index}
          size={size}
          delay={index * animationDiff}
          duration={duration - index * animationDiff}
          ringBorderWidth={ringBorderWidth}
          ringColor={ringColor}
        />
      ))}
    </Animated.View>
  );
}

// exports
export default OlaLoader;
