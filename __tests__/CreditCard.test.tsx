// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import CreditCard from "../animations/CreditCard/CreditCard";

describe("<CreditCard />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<CreditCard />);
    const creditCardComponent = getByTestId("credit-card-component");
    expect(creditCardComponent).toBeTruthy();
  });
});
