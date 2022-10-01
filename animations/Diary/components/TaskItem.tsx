// Packages Imports
import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated as ANIMATED,
  Pressable,
} from "react-native";
import {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Swipeable from "react-native-gesture-handler/Swipeable";

// Local Imports
import AnimatedView from "./AnimatedView";
import AppIcon from "./AppIcon";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import ColorPallete from "../constants/ColorPallete";
import IconNames from "../constants/IconNames";
import IconToggler from "./IconToggler";
import useColors from "../hooks/useColors";

// Named imports
import { RectButton } from "react-native-gesture-handler";
import { TaskItemProps } from "../types/ComponentTypes";

const SwipeThreshold = 100;

// function component for TaskItem
function TaskItem(props: TaskItemProps) {
  // Destructuring props
  const {
    taskName,
    completed,
    onTaskCompletePress,
    firstRenderComplete,
    onTaskNameUpdate,
    id,
    onItemPress,
    focused,
    currentSwiped,
    onTaskRemovePress,
  } = props;

  // shared value for shake progress
  const shakeProgress = useSharedValue(0);
  const opacity = useSharedValue(1);
  const swipeableRowref = useRef<Swipeable>();

  // Theme
  const { colors } = useColors();

  // whenever completed is true, animate the view
  useEffect(() => {
    if (completed) {
      Shake();
    } else {
      opacity.value = 1;
    }
  }, [completed, focused]);

  useEffect(() => {
    if (currentSwiped !== id) if (swipeableRowref.current) swipeableRowref.current.close();
  }, [currentSwiped]);

  const renderRightActions = (progressAnimatedValue: ANIMATED.AnimatedInterpolation) => {
    const trans = progressAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [SwipeThreshold, 0],
    });

    const opacity = progressAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const containerStyle: any = {
      width: SwipeThreshold,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: ColorPallete.danger,
    };

    return (
      <ANIMATED.View style={[containerStyle, { transform: [{ translateX: trans }] }]}>
        <ANIMATED.View style={{ opacity: opacity }}>
          <RectButton onPress={onTaskRemovePress} style={styles.rippleContainer}>
            <AppIcon
              family={IconNames.AntDesign}
              name="delete"
              size={24}
              color={ColorPallete.white}
            />
          </RectButton>
        </ANIMATED.View>
      </ANIMATED.View>
    );
  };

  // inactive icon component styles
  const inactiveIconComponentStyles: StyleProp<ViewStyle> = [
    styles.inactiveIconComponentStyles,
    {
      borderColor: colors?.text,
    },
  ];

  // function to shake the text
  const Shake = () => {
    try {
      shakeProgress.value = withSequence(
        withTiming(2, { duration: 100 }),
        withTiming(-2, { duration: 100 }),
        withTiming(0, { duration: 100 }, () => {
          opacity.value = withTiming(0.5);
        })
      );
    } catch (error) {}
  };

  // animated style for the view
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: shakeProgress.value,
        },
      ],
      opacity: opacity.value,
    };
  });

  // render
  return (
    <AnimatedView
      flex={0}
      entering={firstRenderComplete ? FadeIn.delay(150) : undefined}
      exiting={FadeOut}
    >
      <Swipeable
        ref={swipeableRowref}
        renderRightActions={renderRightActions}
        useNativeAnimations={true}
        overshootFriction={9}
        childrenContainerStyle={styles.container}
      >
        {/* This is the icon at the start */}
        <IconToggler
          active={completed}
          disableActivePress={true}
          disableInActivePress={true}
          activeIconProps={{ color: colors?.primary }}
          size={22}
          inActiveIconComponent={<View style={inactiveIconComponentStyles} />}
          onInActivePress={onTaskCompletePress}
        />

        {/* This is the input */}
        {focused ? (
          <AnimatedView>
            <AppTextInput
              placeholder="Enter a task"
              value={taskName}
              style={{ marginLeft: 10, textDecorationLine: focused ? "none" : "line-through" }}
              onChangeText={text => (onTaskNameUpdate ? onTaskNameUpdate(id, text) : null)}
              autoFocus={true}
            />
          </AnimatedView>
        ) : null}

        {/* This is the text */}
        {!focused ? (
          <Pressable style={{ flex: 1 }} onPress={onItemPress}>
            <AnimatedView style={[styles.textContainer, animatedStyle]}>
              <AppText
                text={taskName}
                size={16}
                marginLeft={10}
                numberOfLines={1}
                style={{ textDecorationLine: completed ? "line-through" : "none" }}
                onPress={onItemPress}
              />
            </AnimatedView>
          </Pressable>
        ) : null}
      </Swipeable>
    </AnimatedView>
  );
}

// exports
export default TaskItem;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    alignItems: "center",
    flex: 0,
    marginBottom: 5,
    marginRight: 10,
  },
  inactiveIconComponentStyles: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 22,
  },
  rippleContainer: { justifyContent: "center", alignItems: "center" },
  textContainer: {
    justifyContent: "center",
  },
});
