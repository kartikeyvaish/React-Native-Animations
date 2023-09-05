// Packages Imports (from node_modules)
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";

export type MenuSelectionOptions = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// interface for Menu component
export interface MenuProps {
  onItemPress: (selection: MenuSelectionOptions) => void;
  xProgress: SharedValue<number>;
  yProgress: SharedValue<number>;
  screenOffset?: number;
  ballSize: number;
}

export interface MenuItemProps {
  onPress?: () => void;
  title?: string;
}

// Constants
const MENU_ITEM_HEIGHT = 50;
const MENU_ITEM_WIDTH = 120;

function Item(props: MenuItemProps) {
  // Destrcuturing props
  const { onPress, title } = props;

  return (
    <RectButton style={[styles.itemContainer, styles.btnContainer]} onPress={onPress}>
      <Animated.Text style={styles.btnText} adjustsFontSizeToFit numberOfLines={1}>
        {title}
      </Animated.Text>
    </RectButton>
  );
}

// functional component for Menu
function Menu(props: MenuProps) {
  // Destructuring props
  const { onItemPress, xProgress, yProgress, ballSize = 50, screenOffset = 20 } = props;

  const animatedStyle = useAnimatedStyle(() => {
    const left = interpolate(
      xProgress.value,
      [screenOffset, ScreenWidth - screenOffset - ballSize],
      [screenOffset + ballSize + 5, ScreenWidth - screenOffset - ballSize - MENU_ITEM_WIDTH - 5],
      Extrapolate.CLAMP
    );

    const top = interpolate(
      yProgress.value,
      [screenOffset, ScreenHeight - screenOffset - ballSize],
      [screenOffset + 5, ScreenHeight - screenOffset - MENU_ITEM_HEIGHT * 4 - 5],
      Extrapolate.CLAMP
    );

    return {
      left,
      top,
    };
  });

  // render
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={[styles.container, animatedStyle]}>
      <Item title='Top Left' onPress={() => onItemPress("top-left")} />
      <Item title='Top Right' onPress={() => onItemPress("top-right")} />
      <Item title='Bottom Left' onPress={() => onItemPress("bottom-left")} />
      <Item title='Bottom Right' onPress={() => onItemPress("bottom-right")} />
    </Animated.View>
  );
}

// exports
export default Menu;

// styles for Menu
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    top: 100,
    left: 100,
    zIndex: 100,
    elevation: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  itemContainer: {
    width: MENU_ITEM_WIDTH,
    height: MENU_ITEM_HEIGHT,
  },
  btnContainer: { justifyContent: "center", alignItems: "center" },
  btnText: { color: "black", fontSize: 14 },
});
