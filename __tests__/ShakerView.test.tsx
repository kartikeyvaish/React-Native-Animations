// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import ShakeItUp from "../animations/ShakeItUp/ShakeItUp";

describe("<ShakeItUp />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ShakeItUp />);
    const rippleComponent = getByTestId("shaker-view");
    expect(rippleComponent).toBeTruthy();
  });
});
