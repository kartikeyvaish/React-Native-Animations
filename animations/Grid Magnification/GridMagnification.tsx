// Packages imports
import { useEffect } from "react";
import { StyleSheet, View, Appearance } from "react-native";
import { Canvas, Group, runTiming, SweepGradient, useTouchHandler, useValue, vec } from "@shopify/react-native-skia";
import * as NavigationBar from "expo-navigation-bar";

// Local imports
import { RoundedItem } from "./components/rounded-item";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PADDING,
  SQUARES_AMOUNT_HORIZONTAL,
  SQUARES_AMOUNT_VERTICAL,
  SQUARE_CONTAINER_SIZE,
  SQUARE_SIZE,
} from "./constants/constants";
import { StatusBar } from "expo-status-bar";
import Colors from "../../theme/Colors";

// Default export function GridMagnification
export default function GridMagnification() {
  // use Value hook variables
  const touchedPoint = useValue<{ x: number; y: number } | null>(null);
  const progress = useValue(0);

  // change navigation bar color
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");

    return () => {
      const colorScheme = Appearance.getColorScheme();
      NavigationBar.setBackgroundColorAsync(
        colorScheme === "dark" ? Colors.dark.colors.background : Colors.light.colors.background
      );
    };
  }, []);

  // useTouchHandler hook variables
  const touchHandler = useTouchHandler({
    onStart: event => {
      runTiming(progress, 1, { duration: 300 });
      touchedPoint.current = { x: event.x, y: event.y };
    },
    onActive: event => {
      touchedPoint.current = { x: event.x, y: event.y };
    },
    onEnd: () => {
      runTiming(progress, 0, { duration: 300 });
      touchedPoint.current = null;
    },
  });

  // render
  return (
    <>
      <StatusBar backgroundColor="black" style="light" />

      <View style={styles.container}>
        <Canvas style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} onTouch={touchHandler}>
          <Group>
            {new Array(SQUARES_AMOUNT_HORIZONTAL).fill(0).map((_, i) => {
              return new Array(SQUARES_AMOUNT_VERTICAL).fill(0).map((_, j) => {
                return (
                  <RoundedItem
                    progress={progress}
                    point={touchedPoint}
                    key={`i${i}-j${j}`}
                    x={i * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    y={j * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    width={SQUARE_SIZE}
                    height={SQUARE_SIZE}
                  />
                );
              });
            })}
            <SweepGradient
              c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
              colors={["cyan", "magenta", "yellow", "cyan"]}
            />
          </Group>
        </Canvas>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
