// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import VolumeSlider from "../animations/VolumeSlider/VolumeSlider";

describe("<VolumeSlider />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<VolumeSlider />);
    const volumeSlider = getByTestId("volume-slider-component");
    expect(volumeSlider).toBeTruthy();
  });
});
