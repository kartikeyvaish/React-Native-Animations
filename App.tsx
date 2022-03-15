// Packages Imports
import "react-native-gesture-handler";

// Local Imports
import AppNavigator from "./navigation/AppNavigator";
import Wrapper from "./components/Wrapper";

// default App export
export default function App() {
  return (
    <Wrapper>
      <AppNavigator />
    </Wrapper>
  );
}
