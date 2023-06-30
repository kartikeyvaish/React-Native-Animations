// Packages Imports (from node_modules)
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

// Component Imports
import AnimatedSlider from "../animations/AnimatedSlider/AnimatedSlider";

describe("<AnimatedSlider />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<AnimatedSlider />);
    const flatListComponent = getByTestId("animated-slider");
    expect(flatListComponent).toBeTruthy();
  });

  it("should have 10 items", () => {
    const tree = renderer.create(<AnimatedSlider />);
    const flatlist = tree.root.findByProps({ testID: "animated-slider" });
    expect(flatlist.props.data.length).toBe(6);
  });
});
