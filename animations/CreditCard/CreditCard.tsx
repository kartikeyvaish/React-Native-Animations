// Packages Imports
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { Extrapolate, interpolate, useSharedValue, withTiming } from "react-native-reanimated";

// Local Impor
import GradientCard from "./components/GradientCard";
import MoverCard from "./components/MoverCard";

// Constants
const DeviceWidth = Dimensions.get("window").width;

const GRADIENT_HEIGHT = DeviceWidth - 150;
const GRADIENT_WIDTH = DeviceWidth * 0.95;

const CARD_WIDTH = GRADIENT_WIDTH - 10;
const CARD_HEIGHT = GRADIENT_HEIGHT - 10;

const USER_IMAGE = "https://avatars.githubusercontent.com/u/55032587?v=4";
const USER_NAME = "Kartikey Vaish";

// function component for CreditCard
function CreditCard() {
  // Shared values for the rotation
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  // Pan Gesture Handler for the Card
  const gesture = Gesture.Pan()
    .onBegin((event: PanGestureHandlerEventPayload) => {
      rotateX.value = withTiming(
        interpolate(event.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP)
      );
      rotateY.value = withTiming(
        interpolate(event.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP)
      );
    })
    .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      rotateX.value = interpolate(event.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP);
      rotateY.value = interpolate(event.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP);
    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });

  // render
  return (
    <View style={styles.container} testID='credit-card-component'>
      <GradientCard width={GRADIENT_WIDTH} height={GRADIENT_HEIGHT} />

      <GestureDetector gesture={gesture}>
        <MoverCard
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          rotateX={rotateX}
          rotateY={rotateY}
          cardHolderImage={USER_IMAGE}
          cardHolderName={USER_NAME}
        />
      </GestureDetector>
    </View>
  );
}

// exports
export default CreditCard;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
