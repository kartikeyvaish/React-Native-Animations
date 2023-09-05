// Packages Imports
import { render } from "@testing-library/react-native";

// Local Imports
import ParookavilleFlingScreen from "../animations/ParookavilleFling/ParookavilleFlingScreen";

describe("<ParookavilleFlingScreen />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ParookavilleFlingScreen />);
    const flingScreenContainer = getByTestId("parookaville-list-container");
    expect(flingScreenContainer).toBeTruthy();
  });
});
