// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import OnBoarding from "../animations/Onboarding/OnBoarding";

describe("<OnBoarding />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<OnBoarding />);
    const onboardingComponent = getByTestId("onboarding-screen");
    expect(onboardingComponent).toBeTruthy();
  });
});
