// Component Imports
import AppContainer from "../../components/AppContainer";
import BackdropFlatlist from "./components/BackdropFlatlist";
import MoviesFlatlist from "./components/MoviesFlatlist";

// Hooks
import useMovies from "./hooks/useMovies";

// function component for MoviesSlider
function MoviesSlider() {
  // get movies custom hook
  const { Movies, onScroll, scrollX } = useMovies();

  // render
  return (
    <AppContainer>
      <BackdropFlatlist movies={Movies} scrollX={scrollX} />

      <MoviesFlatlist movies={Movies} onScroll={onScroll} scrollX={scrollX} />
    </AppContainer>
  );
}

// exports
export default MoviesSlider;
