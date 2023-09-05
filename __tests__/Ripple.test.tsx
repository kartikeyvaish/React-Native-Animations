// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import Ripple from "../animations/RippleEffect/components/Ripple";

describe("<Ripple />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Ripple />);
    const rippleComponent = getByTestId("ripple-tapper-component");
    expect(rippleComponent).toBeTruthy();
  });
});
