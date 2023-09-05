// Packages Imports (from node_modules)
import {
  Canvas,
  Blur,
  Image,
  useImage,
  useSharedValueEffect,
  useValue,
} from "@shopify/react-native-skia";
import { useDerivedValue, withTiming } from "react-native-reanimated";

// Named imports
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";

// interface for BlurBackground component
export interface BlurBackgroundProps {
  isBlurred: boolean;
}

// functional component for BlurBackground
function BlurBackground(props: BlurBackgroundProps) {
  // Destructuring props
  const { isBlurred } = props;

  // RN Skia Values
  const blurValue = useValue(0);
  const image = useImage(require("../assets/background.jpg"));

  // This is a progress value for the blurness
  const derivedProgressValue = useDerivedValue(() => {
    return isBlurred ? withTiming(3) : withTiming(0);
  }, [isBlurred]);

  useSharedValueEffect(() => {
    blurValue.current = derivedProgressValue.value;
  }, derivedProgressValue);

  if (!image) return null;

  // render
  return (
    <Canvas style={{ flex: 1 }}>
      <Image x={0} y={0} width={ScreenWidth} height={ScreenHeight} image={image} fit='cover'>
        <Blur blur={blurValue} mode='clamp' />
      </Image>
    </Canvas>
  );
}

// exports
export default BlurBackground;
