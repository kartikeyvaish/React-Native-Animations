// Packages Imports
import { useTheme } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { SafeAreaView, SafeAreaProvider as SAP } from "react-native-safe-area-context";

// Local Imports (components/types/utils)
import { ChildrenProps } from "../types/ComponentTypes";

// Create a animated safe area view
const SafeAreaAnimated = Animated.createAnimatedComponent(SafeAreaView);

// functional component for SafeAreaProvider
function SafeAreaProvider(props: ChildrenProps) {
  // Destructuring props
  const { children } = props;

  const { colors } = useTheme();

  // render
  return (
    <SAP>
      <SafeAreaAnimated style={[{ flex: 1, backgroundColor: colors.background }]}>
        {children}
      </SafeAreaAnimated>
    </SAP>
  );
}

// exports
export default SafeAreaProvider;
