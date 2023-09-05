// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports ;
import Ringing from "../animations/Ringing/Ringing";

describe("<Ringing />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Ringing />);
    const ringingComponent = getByTestId("ringing-component");
    expect(ringingComponent).toBeTruthy();
  });
});
