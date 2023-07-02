// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import ClockLoader from "../animations/ClockLoader/ClockLoader";

describe("<ClockLoader />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<ClockLoader />);
    const clockLoaderComponent = getByTestId("clock-loader-component");
    expect(clockLoaderComponent).toBeTruthy();
  });
});
