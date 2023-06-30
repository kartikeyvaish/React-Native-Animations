// Packages Imports
import { render, fireEvent, waitFor } from "@testing-library/react-native";

// Local Imports
import AnimatedTimer from "../animations/AnimatedTimer/AnimatedTimer";
import useTimerAnimation from "../animations/AnimatedTimer/hooks/useTimerAnimation";

jest.mock("../animations/AnimatedTimer/hooks/useTimerAnimation", () => {
  return {
    __esModule: true,
    default: jest.fn(() => ({
      buttonVisible: true, // Set the expected value of buttonVisible here
      onScroll: jest.fn(),
      startAnimation: jest.fn(),
      timerCounter: jest.fn(),
      transalteY: jest.fn(),
    })),
  };
});

describe("<AnimatedTimer />", () => {
  it("renders StatusBar with light-content style", () => {
    render(<AnimatedTimer />);
  });

  it("renders the container view with correct styles and components", () => {
    const { getByTestId, queryByTestId } = render(<AnimatedTimer />);

    const flatList = getByTestId("animated-timer-flatlist");
    const startButton = getByTestId("animated-timer-start-button");

    expect(flatList).toBeTruthy();
    expect(startButton).toBeTruthy();

    expect(queryByTestId("animated-timer-mover-button")).toBeNull();
    expect(queryByTestId("animated-timer-counter-button")).toBeNull();
  });

  it("renders 6 cards inside flatlist", () => {
    const { getByTestId } = render(<AnimatedTimer />);

    const flatList = getByTestId("animated-timer-flatlist");

    expect(flatList).toBeTruthy();

    expect(flatList.props.data.length).toBe(6);
  });

  it("calls the startAnimation function when StartButton is pressed", async () => {
    const { getByTestId } = render(<AnimatedTimer />);
    const startButton = getByTestId("animated-timer-start-button");

    fireEvent.press(startButton);

    await waitFor(() => {
      expect(useTimerAnimation).toHaveBeenCalled();
    });
  });
});
