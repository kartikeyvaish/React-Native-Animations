// Pakcages Imports
import { useEffect, useState } from "react";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

// Local imports
import { GetMovies } from "../helper/helper";
import { MoviesItemProps } from "../types/types";

// Custom hook to get movies from the API
export default function useMovies() {
    // Shared Values
    const scrollX = useSharedValue(0);

    // Local State 
    const [Movies, SetMovies] = useState<Array<MoviesItemProps>>([]);

    // initial call to get the movies
    useEffect(() => {
        SetMovies(GetMovies());
    }, []);

    // onScroll
    const onScroll = useAnimatedScrollHandler(event => {
        try {
            scrollX.value = event.contentOffset.x;
        } catch (error) {
            scrollX.value = 0;
        }
    });

    return { Movies, onScroll, scrollX };
}