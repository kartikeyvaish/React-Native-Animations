import { StyleSheet, useWindowDimensions } from "react-native";
import React, { useMemo } from "react";
import {
  Blur,
  Circle,
  ColorMatrix,
  Group,
  Paint,
  SweepGradient,
  runSpring,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import Touchable, { useGestureHandler } from "react-native-skia-gesture";

// Ball Radius
const BALL_RADIUS = 80;

interface GestureHandlerTypes {
  x: number;
  y: number;
}

function MetaballAnimation() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const cx = useValue(windowWidth / 2);
  const cy = useValue(windowHeight / 2);

  const gestureHandler = useGestureHandler<GestureHandlerTypes>({
    onStart: (_, context) => {
      context.x = cx.current;
      context.y = cy.current;
    },
    onActive: ({ translationX, translationY }, context) => {
      cx.current = translationX + context.x;
      cy.current = translationY + context.y;
    },
    onEnd: () => {
      runSpring(cx, windowWidth / 2);
      runSpring(cy, windowHeight / 2);
    },
  });

  const layer = useMemo(() => {
    return (
      <Paint>
        <Blur blur={30} />
        <ColorMatrix matrix={[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 60, -30]} />
      </Paint>
    );
  }, []);

  return (
    <Touchable.Canvas style={styles.canvasContainerStyles}>
      <Group layer={layer}>
        <Touchable.Circle {...gestureHandler} cx={cx} cy={cy} r={BALL_RADIUS} />

        <Circle cx={windowWidth / 2} cy={windowHeight / 2} r={BALL_RADIUS} />

        <SweepGradient c={vec(0, 0)} colors={["cyan", "magenta", "cyan"]} />
      </Group>
    </Touchable.Canvas>
  );
}

const styles = StyleSheet.create({
  canvasContainerStyles: {
    flex: 1,
    backgroundColor: "#111",
  },
});

export default MetaballAnimation;
