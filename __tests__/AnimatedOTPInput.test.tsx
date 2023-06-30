// Packages Imports (from node_modules)
import { render, fireEvent } from "@testing-library/react-native";

// Component Imports
import AnimatedOTPInput, {
  DigitItem,
  RippleCircleButton,
} from "../animations/AnimatedOTPInput/AnimatedOTPInput";

describe("<AnimatedOTPInput />", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<AnimatedOTPInput />);
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("<DigitItem />", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<DigitItem digit='1' />);
    expect(toJSON()).toMatchSnapshot();

    const { getByTestId } = render(<DigitItem digit='6' />);
    expect(getByTestId("digit-6")).toBeTruthy();
  });

  it("calls onPress", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<DigitItem digit='1' onPress={onPress} />);
    fireEvent.press(getByTestId("digit-1"));
    expect(onPress).toHaveBeenCalled();
  });
});

describe("<RippleCircleButton />", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<RippleCircleButton />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("calls onPress", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<RippleCircleButton onPress={onPress} />);
    fireEvent.press(getByTestId("animated-input-ripple-circle-button"));
    expect(onPress).toHaveBeenCalled();
  });
});
