// Packages Imports (from node_modules)
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

// Component Imports
import AnimatedFlatList from "../animations/AnimatedFlatlist/AnimatedFlatList";

describe("<AnimatedFlatList />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<AnimatedFlatList />);
    const flatListComponent = getByTestId("animated-flatlist");
    expect(flatListComponent).toBeTruthy();
  });

  it("should have 10 items", () => {
    const tree = renderer.create(<AnimatedFlatList />);
    const flatlist = tree.root.findByProps({ testID: "animated-flatlist" });
    expect(flatlist.props.data.length).toBe(50);
  });
});
