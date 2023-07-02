// Packages Imports
import { render } from "@testing-library/react-native";
import { useSharedValue } from "react-native-reanimated";

// Local imports
import Dots from "../animations/ProgressDots/components/Dots";

describe("<Dots />", () => {
  it("renders without errors", () => {
    const dotProgress = useSharedValue(0);
    const { getByTestId } = render(
      <Dots testID='example-dots' dotProgress={dotProgress} dotBounceHeight={2} />
    );
    const dotsComponent = getByTestId("example-dots");
    expect(dotsComponent).toBeTruthy();
  });
});
