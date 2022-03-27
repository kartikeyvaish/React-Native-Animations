// Local Imports 
import { END_SPACER, START_SPACER } from "../constants/Constants";
import moviesList from "../mock/movies";
import { MoviesItemProps } from "../types/types";

// Constants 
let MoviesImagePath = "https://image.tmdb.org/t/p/w440_and_h660_face"
let MoviesBackdropPath = "https://image.tmdb.org/t/p/w370_and_h556_multi_faces"
const image_url = MoviesImagePath;
const backdrop_url = MoviesBackdropPath;

// Helpers
const getImagePath = (uri: string) => `${image_url}${uri}`;
const getBackdropPath = (uri: string) => `${backdrop_url}${uri}`;

export const GetMovies = () => {
    try {
        let movies: Array<MoviesItemProps> = [];

        let fetchedMovies = moviesList.map((item: any) => ({
            id: item.id.toString(),
            title: item.original_title,
            poster: getImagePath(item.poster_path),
            backdrop: getBackdropPath(item.backdrop_path),
            rating: item.vote_average,
            description: item.overview,
            releaseDate: item.release_date,
        }));

        movies = [START_SPACER, ...fetchedMovies, END_SPACER];

        // set the movies
        return movies;
    } catch (error) {
        return [];
    }
};