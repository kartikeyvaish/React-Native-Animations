// Packages Imports (from node_modules)
import { render, fireEvent } from "@testing-library/react-native";

// Component Imports
import AnimatedOTPInput, {
  DigitItem,
  RippleCircleButton,
} from "../animations/AnimatedOTPInput/AnimatedOTPInput";

describe("<AnimatedOTPInput />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<AnimatedOTPInput />);
    const animatedOtpInput = getByTestId("animated-otp-input");
    expect(animatedOtpInput).toBeTruthy();
  });
});

describe("<DigitItem />", () => {
  it("renders correctly", () => {
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
    const { getByTestId } = render(<RippleCircleButton />);
    const rippleButton = getByTestId("animated-ripple-button-otp");
    expect(rippleButton).toBeTruthy();
  });

  it("calls onPress", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<RippleCircleButton onPress={onPress} />);
    fireEvent.press(getByTestId("animated-input-ripple-circle-button"));
    expect(onPress).toHaveBeenCalled();
  });
});
