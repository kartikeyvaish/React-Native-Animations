// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import BreathingLoader from "../animations/BreathingLoader/BreathingLoader";

describe("<BreathingLoader />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<BreathingLoader />);
    const breatingComponent = getByTestId("breathing-component");
    expect(breatingComponent).toBeTruthy();
  });
});
