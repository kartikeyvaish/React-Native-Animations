// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import AnimatedDropdownScreen from "../animations/AnimatedDropdown/AnimatedDropdownScreen";

describe("<AnimatedDropdown />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<AnimatedDropdownScreen />);
    const dropdownScreen = getByTestId("animated-dropdown-screen-container");
    expect(dropdownScreen).toBeTruthy();
  });
});
