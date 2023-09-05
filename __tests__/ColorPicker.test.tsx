// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import ColorPicker from "../animations/ColorPicker/ColorPicker";

describe("<ColorPicker />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<ColorPicker />);
    const colorPickerComponent = getByTestId("color-picker-component");
    expect(colorPickerComponent).toBeTruthy();
  });
});
