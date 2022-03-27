// Packges Imports
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";

// interface for Movies item array
export interface MoviesItemProps {
    backdrop?: string;
    description?: string;
    id?: string;
    poster?: string;
    rating?: number;
    releaseDate?: string;
    title?: string;
    is_Spacer?: boolean;
}

// interface for MoviesCard
export interface MoviesCardProps extends MoviesItemProps {
    index: number;
    scrollX: SharedValue<number>;
}

// interface for MoviesFlatlist
export interface MoviesFlatlistProps {
    movies?: Array<MoviesItemProps>;
    onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | Animated.Node<((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined>
    | undefined;
    scrollX: SharedValue<number>;
}