// Packages Imports
import { render } from "@testing-library/react-native";

// Component Imports
import Progress from "../animations/CircularProgress/Progress";

// Mock the react-native-reanimated module
jest.mock("react-native-reanimated", () => {
  const { View } = require("react-native");
  const { Animated } = require("react-native");
  const { Circle } = require("react-native-svg");

  // Create a mock Animated component
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  // Create a mock useAnimatedProps hook
  const useAnimatedProps = jest.fn(() => ({}));

  const useDerivedValue = jest.fn(() => ({}));

  // Return the mock implementations
  return {
    __esModule: true,
    default: Animated,
    View,
    Circle,
    createAnimatedComponent: jest.fn(() => AnimatedCircle),
    useAnimatedProps,
    useDerivedValue,
    interpolate: jest.fn(),
    Extrapolate: { CLAMP: jest.fn() },
  };
});

describe("<CicularProgress />", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Progress progress={40} />);
    const progressComponent = getByTestId("progress-component");
    expect(progressComponent).toBeTruthy();
  });
});
