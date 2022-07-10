// Packages Imports
import { useTheme } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, ViewStyle, Image } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";

// interface for MessageImage
export type MessageImageProps = {
  source: any;
};

// function component for MessageImage
function MessageImage(props: MessageImageProps) {
  // Destructuring props
  const { source } = props;

  // Local States
  const [Loaded, SetLoaded] = useState(false);

  // Get the theme
  const { colors } = useTheme();

  // loading container styles
  const loadingContainerStyles: StyleProp<ViewStyle> = [
    styles.loadingContainer,
    { backgroundColor: colors.background },
  ];

  // memoized loader
  const Loader = useMemo(
    () =>
      !Loaded ? (
        <Animated.View exiting={FadeOut} style={loadingContainerStyles}>
          <ActivityIndicator size={"large"} color={colors.primary} />
        </Animated.View>
      ) : null,
    [Loaded]
  );

  // memoized image part
  const ImagePart = useMemo(
    () => <Image source={source} onLoad={() => SetLoaded(true)} style={styles.imageCard} />,
    [source, Loaded]
  );

  // render
  return (
    <>
      {ImagePart}
      {Loader}
    </>
  );
}

// exports
export default MessageImage;

// styles
const styles = StyleSheet.create({
  imageCard: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
