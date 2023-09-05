// Packages Imports (from node_modules)
import { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import Animated, { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

// Local Imports (components/types/utils)
import BlurBackground from "./components/BlurBackground";
import Draggableball from "./components/DraggableBall";

// named imports
import { ScreenHeight, ScreenWidth } from "../../constants/Dimensions";
import Menu, { MenuSelectionOptions } from "./components/Menu";

// interface for DraggablePopOverScreen component
export interface DraggablePopOverScreenProps {}

// Constants
const BALL_SIZE = 50;
const MIN_X_COORDINATE = 20;
const MIN_Y_COORDINATE = 20;
const MAX_X_COORDINATE = ScreenWidth - BALL_SIZE - MIN_X_COORDINATE;
const MAX_Y_COORDINATE =
  ScreenHeight - BALL_SIZE - MIN_Y_COORDINATE - (Platform.OS === "ios" ? 100 : 0);

function getReleaseCoOrdinates(x: number, y: number) {
  "worklet";
  // When the user releases the ball,
  // we need to check if the ball is in the left half of the screen or the right half of the screen
  // also we need to check if the ball is in the top half of the screen or the bottom half of the screen
  // and then we need to move the ball to the nearest corner of the screen

  return {
    x: x < ScreenWidth / 2 ? MIN_X_COORDINATE : MAX_X_COORDINATE,
    y: y < ScreenHeight / 2 ? MIN_Y_COORDINATE : MAX_Y_COORDINATE,
  };
}

// functional component for DraggablePopOverScreen
function DraggablePopOverScreen() {
  // Local States
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  // Shared Values
  const xCoOrdinate = useSharedValue(MIN_X_COORDINATE);
  const yCoOrdinate = useSharedValue(MIN_Y_COORDINATE);

  // Pan Gesture Handler for the Card
  const gesture = Gesture.Pan()
    .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      if (isMoving && !menuVisible) {
        const x = event.x - BALL_SIZE / 2;
        const y = event.y - BALL_SIZE / 2;

        xCoOrdinate.value = x;
        yCoOrdinate.value = y;
      }
    })
    .onFinalize((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
      if (isMoving && !menuVisible) {
        runOnJS(setIsMoving)(false);
        const { x, y } = getReleaseCoOrdinates(event.x - BALL_SIZE / 2, event.y - BALL_SIZE / 2);
        xCoOrdinate.value = withSpring(x);
        yCoOrdinate.value = withSpring(y);
      }
    });

  const moveBall = (position: MenuSelectionOptions) => {
    if (position === "top-left") {
      xCoOrdinate.value = withSpring(MIN_X_COORDINATE);
      yCoOrdinate.value = withSpring(MIN_Y_COORDINATE);
    } else if (position === "top-right") {
      xCoOrdinate.value = withSpring(MAX_X_COORDINATE);
      yCoOrdinate.value = withSpring(MIN_Y_COORDINATE);
    } else if (position === "bottom-left") {
      xCoOrdinate.value = withSpring(MIN_X_COORDINATE);
      yCoOrdinate.value = withSpring(MAX_Y_COORDINATE);
    } else if (position === "bottom-right") {
      xCoOrdinate.value = withSpring(MAX_X_COORDINATE);
      yCoOrdinate.value = withSpring(MAX_Y_COORDINATE);
    }

    setMenuVisible(false);
    setIsMoving(false);
  };

  // render
  return (
    <Animated.View style={{ flex: 1 }} testID='draggable-test-container-id'>
      <BlurBackground isBlurred={isMoving || menuVisible} />

      {menuVisible ? (
        <Menu
          onItemPress={moveBall}
          xProgress={xCoOrdinate}
          yProgress={yCoOrdinate}
          ballSize={BALL_SIZE}
        />
      ) : null}

      <GestureDetector gesture={gesture}>
        <View style={styles.container}>
          <Draggableball
            xCoOrdinate={xCoOrdinate}
            yCoOrdinate={yCoOrdinate}
            onTouchStart={() => setIsMoving(true)}
            ballSize={BALL_SIZE}
            isMoving={isMoving}
            onLongPress={() => setMenuVisible(true)}
          />
        </View>
      </GestureDetector>
    </Animated.View>
  );
}

// exports
export default DraggablePopOverScreen;

// styles for DraggablePopOverScreen
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
