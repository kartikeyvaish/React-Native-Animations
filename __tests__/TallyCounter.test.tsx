// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import TallyCounter from "../animations/TallyCounter/TallyCounter";

describe("<TallyCounter />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<TallyCounter />);
    const tallyCounterComponent = getByTestId("tally-counter-component");
    expect(tallyCounterComponent).toBeTruthy();
  });
});
