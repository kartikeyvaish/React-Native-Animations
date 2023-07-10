// Packages Imports (from node_modules)
import { useContext, useMemo, useRef } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Animated, { FadeIn, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { Image } from "expo-image";

// Local Imports (components/types/utils)
import DetailsSheetContext from "../contexts/DetailsSheetContext";

// functional component for DetailsSheet
function DetailsSheet() {
  // Local States
  const { closeSheet, currentItem } = useContext(DetailsSheetContext);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  if (currentItem === null) return null;

  // render
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Pressable style={styles.backdropContainer} onPress={closeSheet} />
      </Animated.View>

      <Animated.View
        style={[styles.container, { top: 250 }]}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          animateOnMount={false}
          handleIndicatorStyle={{ display: "none" }}
          handleStyle={{ display: "none" }}
        >
          <View style={styles.contentContainer}>
            <Image source={{ uri: currentItem.image }} style={styles.image} />
          </View>

          <Pressable style={styles.closeIconContainer} onPress={closeSheet}>
            <AntDesign name='closecircleo' size={28} color='black' />
          </Pressable>

          <Text style={styles.title}>{currentItem.name}</Text>

          <Text style={styles.description} numberOfLines={4}>
            {currentItem.description}
          </Text>

          <Text style={styles.price}>{`${currentItem.currency} ${currentItem.price}`}</Text>
        </BottomSheet>
      </Animated.View>
    </Animated.View>
  );
}

// exports
export default DetailsSheet;

// styles for DetailsSheet
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {},
  backdropContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  image: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    color: "grey",
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  closeIconContainer: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    marginRight: 10,
    marginLeft: 10,
    color: "black",
  },
});
