// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import Clock from "../animations/Clock/Clock";

describe("<Clock />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Clock />);
    const clockComponent = getByTestId("clock-component");
    expect(clockComponent).toBeTruthy();
  });
});
