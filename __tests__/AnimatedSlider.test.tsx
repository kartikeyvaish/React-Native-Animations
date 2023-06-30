// Packages Imports (from node_modules)
import renderer from "react-test-renderer";

// Component Imports
import AnimatedSlider from "../animations/AnimatedSlider/AnimatedSlider";

describe("<AnimatedSlider />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<AnimatedSlider />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should have 10 items", () => {
    const tree = renderer.create(<AnimatedSlider />);
    const flatlist = tree.root.findByProps({ testID: "animated-slider" });
    expect(flatlist.props.data.length).toBe(6);
  });
});
