// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import AirbnbTimerScreen from "../animations/AirbnbTimer";

describe("<AirbnbTimer />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<AirbnbTimerScreen />);
    const airbnbTimerCard = getByTestId("airbnb-timer-card");
    expect(airbnbTimerCard).toBeTruthy();
  });
});
