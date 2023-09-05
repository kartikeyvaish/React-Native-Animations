// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import FlingCardStack from "../animations/FlingCardStack/FlingCardStack";

describe("<FlingCardStack />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<FlingCardStack />);
    const flingStackComponent = getByTestId("fling-stack-component");
    expect(flingStackComponent).toBeTruthy();
  });
});
