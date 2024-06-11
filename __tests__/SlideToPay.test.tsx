// Packages Imports
import { render } from "@testing-library/react-native";

// Local Imports
import SlideToPay from "../animations/SlideToPay";

describe("<SlideToPay />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<SlideToPay />);
    const slideToPayScreenContainer = getByTestId("slide-to-pay");
    expect(slideToPayScreenContainer).toBeTruthy();
  });
});
