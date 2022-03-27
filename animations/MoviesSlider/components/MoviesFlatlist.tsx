// Packages Imports
import { FlatList } from "react-native";
import Animated from "react-native-reanimated";

// Local Imports
import { ITEM_SIZE } from "../constants/Constants";
import MoviesCard from "./MoviesCard";
import { MoviesFlatlistProps } from "../types/types";
import SpacerComponent from "./SpacerComponent";

// Create a animated Flatlist
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// function component for MoviesFlatlist
function MoviesFlatlist(props: MoviesFlatlistProps) {
  // Destructuring props
  const { movies, onScroll, scrollX } = props;

  // render Item function for Flatlist
  const moviesRenderItem = ({ item, index }: any) =>
    item.is_Spacer ? <SpacerComponent /> : <MoviesCard index={index} scrollX={scrollX} {...item} />;

  // render
  return (
    <AnimatedFlatList
      data={movies}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={moviesRenderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      snapToInterval={ITEM_SIZE}
      contentContainerStyle={{ alignItems: "center", backgroundColor: "transparent" }}
    />
  );
}

// exports
export default MoviesFlatlist;
