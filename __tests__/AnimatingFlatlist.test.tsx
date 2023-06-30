// Packages Imports (from node_modules)
import renderer from "react-test-renderer";

// Component Imports
import AnimatedFlatList from "../animations/AnimatedFlatlist/AnimatedFlatList";

describe("<AnimatedFlatList />", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<AnimatedFlatList />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should have 10 items", () => {
    const tree = renderer.create(<AnimatedFlatList />);
    const flatlist = tree.root.findByProps({ testID: "animated-flatlist" });
    expect(flatlist.props.data.length).toBe(50);
  });
});
