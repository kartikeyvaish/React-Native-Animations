// Packages Imports
import { render } from "@testing-library/react-native";

// Local imports
import WhatsAppMic from "../animations/WhatsAppMic/WhatsAppMic";

describe("<WhatsAppMic />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<WhatsAppMic />);
    const whatsappMic = getByTestId("whatsapp-mic-component");
    expect(whatsappMic).toBeTruthy();
  });
});
