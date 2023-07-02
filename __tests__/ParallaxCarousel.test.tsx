// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import ParallaxCaraousel from "../animations/ParallaxCaraousel/ParallaxCaraousel";

describe("<ParallaxCaraousel />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<ParallaxCaraousel />);
    const parallaxCarouselComponent = getByTestId("parallax-carousel-component");
    expect(parallaxCarouselComponent).toBeTruthy();
  });
});
