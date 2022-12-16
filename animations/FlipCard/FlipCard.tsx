// Packages Imports
import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

// Local Imports
import AnimatedText from "../../components/AnimatedText";
import AppContainer from "../../components/AppContainer";
import ColorPallete from "../../utils/ColorPallete";
import { ScreenWidth } from "../.././constants/Dimensions";

// Constants
const CARD_WIDTH = ScreenWidth - 20;
const CARD_HEIGHT = ScreenWidth * 0.6;

// function component for FlipCard
function FlipCard() {
  // Shared Values
  const rotateY = useSharedValue(0);

  // Local States
  const [Flipped, SetFlipped] = useState<boolean>(false);

  // Toggle Rotation
  const toggleRotate = () => {
    if (Flipped) {
      rotateY.value = withTiming(0, { duration: 200 }, () => {
        runOnJS(SetFlipped)(false);
      });
    } else {
      rotateY.value = withTiming(180, { duration: 200 }, () => {
        runOnJS(SetFlipped)(true);
      });
    }
  };

  // animated Styles
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: rotateY.value + "deg",
        },
      ],
    };
  });

  // animated front styles
  const frontStyles = useAnimatedStyle(() => {
    const opacity = interpolate(rotateY.value, [0, 90, 180], [1, 0, 0]);

    return { opacity };
  });

  // animated back styles
  const backStyles = useAnimatedStyle(() => {
    const opacity = interpolate(rotateY.value, [0, 90, 180], [0, 0, 1]);

    return { opacity };
  });

  const FrontPart = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.layoutContainer}>
          <AnimatedText
            text="Kartikey Vaish"
            marginTop={30}
            marginLeft={25}
            size={30}
            color={ColorPallete.white}
            style={[{ fontWeight: "bold" }, frontStyles]}
            keepEntExitAni={false}
          />

          <AnimatedText
            text="1234 5678 9876 1452"
            marginTop={40}
            marginLeft={25}
            size={18}
            color={ColorPallete.white}
            style={[{ fontWeight: "500" }, frontStyles]}
            keepEntExitAni={false}
          />

          <AnimatedText
            text="08/26"
            marginTop={10}
            marginLeft={25}
            size={14}
            color={ColorPallete.white}
            style={[{ fontWeight: "500" }, frontStyles]}
            keepEntExitAni={false}
          />

          <View style={{ position: "absolute", bottom: 20, right: 20 }}>
            <AnimatedText
              text="VISA"
              size={14}
              color={ColorPallete.white}
              style={[{ fontWeight: "500" }, frontStyles]}
              keepEntExitAni={false}
            />
          </View>
        </View>
      </View>
    );
  };

  const BackPart = () => {
    return (
      <>
        <Animated.View style={[styles.cvvStrip, backStyles]} />

        <AnimatedText text="123" style={[styles.CvvText, backStyles]} />
      </>
    );
  };

  // render
  return (
    <AppContainer style={styles.container}>
      <Pressable onPress={toggleRotate}>
        <Animated.View style={[styles.cardContainer, animatedStyles]}>
          {FrontPart()}
          {BackPart()}
        </Animated.View>
      </Pressable>
    </AppContainer>
  );
}

// exports
export default FlipCard;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
  },
  layoutContainer: {
    flex: 1,
    backgroundColor: "#212121",
    elevation: 10,
    shadowColor: "white",
    opacity: 1,
  },
  CvvText: {
    position: "absolute",
    right: CARD_WIDTH / 2 + 20,
    top: 60,
    color: ColorPallete.white,
    transform: [{ rotateY: "180deg" }],
  },
  cvvStrip: {
    width: CARD_WIDTH / 2,
    backgroundColor: ColorPallete.white,
    height: 40,
    position: "absolute",
    top: 50,
    right: 10,
  },
});
