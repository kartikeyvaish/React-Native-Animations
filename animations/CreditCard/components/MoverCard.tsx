// Packages Imports
import { StyleSheet, StyleProp, ViewStyle, View, Text, Image } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

// interface for MoverCard
export interface MoverCardProps {
  width: number | string;
  height: number;
  rotateX: SharedValue<number>;
  rotateY: SharedValue<number>;
  cardHolderName?: string;
  cardHolderImage?: string;
}

// function component for MoverCard
function MoverCard(props: MoverCardProps) {
  // Destructuring props
  const { width, height, rotateX, rotateY, ...cardDetails } = props;

  // Card details
  const { cardHolderImage, cardHolderName } = cardDetails;

  // animated style for the container
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          perspective: 300,
        },
        {
          rotateX: `${rotateX.value}deg`,
        },
        {
          rotateY: `${rotateY.value}deg`,
        },
      ],
    };
  });

  // style for the container
  const containerStyle: StyleProp<ViewStyle> = [
    {
      width,
      height,
    },
    styles.container,
  ];

  // render
  return (
    <Animated.View style={[containerStyle, animatedStyles]}>
      {cardHolderImage ? (
        <Image source={{ uri: cardHolderImage }} style={styles.imageContainer} />
      ) : null}

      {cardHolderName ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{cardHolderName.toUpperCase()}</Text>
        </View>
      ) : null}
    </Animated.View>
  );
}

// exports
export default MoverCard;

// styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 20,
    backgroundColor: "black",
    zIndex: 300,
  },
  imageContainer: {
    backgroundColor: "grey",
    borderRadius: 100,
    width: 60,
    height: 60,
    position: "absolute",
    top: 25,
    left: 25,
  },
  detailsContainer: {
    position: "absolute",
    bottom: 25,
    left: 25,
  },
  title: {
    letterSpacing: 4,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
