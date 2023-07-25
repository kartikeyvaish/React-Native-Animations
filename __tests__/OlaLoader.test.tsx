// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import OlaLoader from "../animations/OlaLoader/components/OlaLoader";

describe("<OlaLoader />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<OlaLoader />);
    const olaLoaderComponent = getByTestId("ola-loader-container");
    expect(olaLoaderComponent).toBeTruthy();
  });
});
