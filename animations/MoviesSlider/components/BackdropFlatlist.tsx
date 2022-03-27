// Packages Imports
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

// Utils and types
import { MoviesFlatlistProps } from "../types/types";

// Components
import BackdropMovieCard from "./BackdropMovieCard";

// Constants
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";

// function component for BackdropFlatlist
function BackdropFlatlist({ movies, scrollX }: MoviesFlatlistProps) {
  const { colors } = useTheme();
  // render
  return (
    <View style={styles.container}>
      {movies?.map((item, index) => {
        return <BackdropMovieCard key={index} scrollX={scrollX} index={index} {...item} />;
      })}

      <LinearGradient
        colors={["transparent", colors.background]}
        style={{ width: ScreenWidth, height: ScreenHeight * 0.6, position: "absolute", bottom: 0 }}
      />
    </View>
  );
}

// exports
export default BackdropFlatlist;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: ScreenHeight * 0.6,
    width: ScreenWidth,
  },
});
