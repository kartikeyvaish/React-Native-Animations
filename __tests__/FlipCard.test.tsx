// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import FlipCard from "../animations/FlipCard/FlipCard";

describe("<FlipCard />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<FlipCard />);
    const flipCard = getByTestId("flip-card-component");
    expect(flipCard).toBeTruthy();
  });
});
