// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import MoviesSlider from "../animations/MoviesSlider/MoviesSlider";

describe("<MoviesSlider />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<MoviesSlider />);
    const moviesSliderComponent = getByTestId("movies-slider-component");
    expect(moviesSliderComponent).toBeTruthy();
  });
});
