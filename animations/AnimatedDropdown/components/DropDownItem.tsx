// packages Imports
import Color from "color";
import { useWindowDimensions, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { RectButton } from "react-native-gesture-handler";

// local Imports
import { DropdownListItemProps } from "../types";

// Constants
const ITEM_HEIGHT = 85;
const MARGIN = 10;
export const NORMAL_SCALE = 1;

const DropdownListItem: React.FC<DropdownListItemProps> = props => {
  const { label, index, isExpanded, dropdownItemsCount, onPress } = props;

  const { width: windowWidth } = useWindowDimensions();

  const fullDropdownHeight = dropdownItemsCount * (ITEM_HEIGHT + MARGIN);

  const collapsedTop = fullDropdownHeight / 2 - ITEM_HEIGHT;
  const expandedTop = (ITEM_HEIGHT + MARGIN) * index;

  const expandedScale = NORMAL_SCALE;
  const collapsedScale = NORMAL_SCALE - index * 0.08;

  const expandedBackgroundColor = "#1B1B1B";
  const collapsedBackgroundColor = Color(expandedBackgroundColor)
    .lighten(index * 0.25)
    .hex();

  const rStyle = useAnimatedStyle(() => {
    return {
      width: windowWidth * 0.95,
      zIndex: dropdownItemsCount - index,
      backgroundColor: withTiming(
        isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor
      ),
      top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
      // 1st scale then translate
      transform: [
        {
          scale: withSpring(isExpanded.value ? expandedScale : collapsedScale),
        },
        {
          translateY: fullDropdownHeight / 2,
        },
      ],
    };
  }, []);

  const isHeader = index === 0;

  const toggleExpansion = () => {
    if (isHeader) isExpanded.value = !isExpanded.value;

    if (onPress) onPress();

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <Animated.View style={[styles.dropDownContainer, rStyle]}>
      <RectButton onPress={toggleExpansion} style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </RectButton>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dropDownContainer: {
    position: "absolute",
    height: ITEM_HEIGHT,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#D4D4D4",
    fontSize: 22,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  iconContainer: {
    position: "absolute",
    width: 45,
    aspectRatio: 1,
    backgroundColor: "#111",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DropdownListItem;
