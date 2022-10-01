// Packages Imports
import { useEffect, useState } from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { BounceIn } from "react-native-reanimated";

// components/types imports
import AnimatedView from "./AnimatedView";
import AppIcon from "./AppIcon";
import useFirstRender from "../hooks/useFirstRender";

// Named imports
import { IconTogglerProps } from "../types/ComponentTypes";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// function component for IconToggler
function IconToggler(props: IconTogglerProps) {
  // Destructuring props
  const {
    active,
    onActivePress,
    onInActivePress,
    size = 30,
    activeIconProps,
    inActiveIconProps,
    activeIconComponent,
    inActiveIconComponent,
    disableActivePress,
    disableInActivePress,
  } = props;

  // state of first launch
  const { firstRender: isFirstRender } = useFirstRender();

  // Local States
  const [IsActive, SetIsActive] = useState(active);

  // look for changes in active
  useEffect(() => {
    SetIsActive(active);
  }, [active]);

  // containerStyles
  const containerStyles: StyleProp<ViewStyle> = [
    { width: size + 10, height: size + 10 },
    styles.container,
  ];

  // function to execute on Active Press
  const handleActivePress = () => {
    try {
      if (!disableActivePress) {
        SetIsActive(false);
      }

      if (typeof onActivePress === "function") onActivePress();
    } catch (error) {}
  };

  // function to execute on InActive Press
  const handleInactivePress = () => {
    try {
      if (!disableInActivePress) {
        SetIsActive(true);
      }

      if (typeof onInActivePress === "function") onInActivePress();
    } catch (error) {}
  };

  // render
  return (
    <>
      {!IsActive ? (
        <AnimatedView style={containerStyles} entering={isFirstRender ? null : BounceIn}>
          {inActiveIconComponent ? (
            <TouchableWithoutFeedback onPress={handleInactivePress}>
              {inActiveIconComponent}
            </TouchableWithoutFeedback>
          ) : (
            <AppIcon
              family="AntDesign"
              size={size}
              onPress={handleInactivePress}
              {...inActiveIconProps}
            />
          )}
        </AnimatedView>
      ) : null}

      {IsActive ? (
        <AnimatedView style={containerStyles} entering={isFirstRender ? null : BounceIn}>
          {activeIconComponent ? (
            <TouchableWithoutFeedback onPress={handleActivePress}>
              {activeIconComponent}
            </TouchableWithoutFeedback>
          ) : (
            <AppIcon
              family="AntDesign"
              size={size}
              onPress={handleActivePress}
              name="checkcircle"
              {...activeIconProps}
            />
          )}
        </AnimatedView>
      ) : null}
    </>
  );
}

// exports
export default IconToggler;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
  },
});
