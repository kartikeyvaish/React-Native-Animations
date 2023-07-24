// Packages Imports (from node_modules)
import { useState } from "react";
import { Image } from "expo-image";
import { Button, Text, View, StyleSheet } from "react-native";

// Local Imports (components/types/utils)
import OlaLoader from "./components/OlaLoader";

// Constants
const MAP_IMAGE =
  "https://res.cloudinary.com/kartikeyvaish/image/upload/v1690211508/Screenshot_2023-07-24_203551_k7sh2i.jpg";

// functional component for OlaLoaderScreen
function OlaLoaderScreen() {
  // Local States
  const [loading, setLoading] = useState<boolean>(false);

  // render
  return (
    <View style={styles.container}>
      <Image source={{ uri: MAP_IMAGE }} style={StyleSheet.absoluteFillObject} />

      <View style={[StyleSheet.absoluteFillObject, styles.contentContainer]}>
        <OlaLoader size={300} loading={loading} />
      </View>

      <View style={styles.textContainer}>
        <Button title='Toggle Loading' onPress={() => setLoading(!loading)} />
        <Text style={styles.loadingText}>Please wait while we fetch the best rides for you.</Text>
      </View>
    </View>
  );
}

// exports
export default OlaLoaderScreen;

// styles for OlaLoaderScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    padding: 20,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
});
