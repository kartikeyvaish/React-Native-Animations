// Packages Imports
import { StyleSheet, Dimensions } from "react-native";
import Animated, {
  Layout,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

// Local Imports
export interface ListItemProps {
  onRemove: (index: number) => void;
  index: number;
}

// Device Width
const deviceWidth = Dimensions.get("window").width;

// function component for ListItem
function ListItem(props: ListItemProps) {
  // Destructuring props
  const { onRemove, index } = props;

  // Shared Values
  const translateProgress = useSharedValue(0);

  // Pan Gesture Handler for the Card
  const gesture = Gesture.Pan()
    .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      translateProgress.value = event.translationX;
    })
    .onFinalize((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      if (Math.abs(event.translationX) > deviceWidth / 3) {
        if (event.translationX > 0) {
          translateProgress.value = withTiming(deviceWidth, {}, () => {
            runOnJS(onRemove)(index);
          });
        } else {
          translateProgress.value = withTiming(-deviceWidth, {}, () => {
            runOnJS(onRemove)(index);
          });
        }
      } else {
        translateProgress.value = withTiming(0);
      }
    });

  // animated style
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateProgress.value }],
    };
  });

  // render
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyles]} layout={Layout.delay(200)} />
    </GestureDetector>
  );
}

// exports
export default ListItem;

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "orange",
  },
});
