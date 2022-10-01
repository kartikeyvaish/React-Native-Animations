// Packages Imports
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// Local Files/App/Components/Store import
import ThemeProvider from "./provider/ThemeProvider";

// Named imports
import { store, persistor } from "./store/configureStore";
import NavigationProvider from "./provider/NavigationProvider";

export default function App() {
  return (
    // ↓ Redux Wrapper that contains the store
    <Provider store={store}>
      {/* ↓ Redux Persis wrapper for data persistance */}
      <PersistGate loading={null} persistor={persistor}>
        {/* ↓ This provider manages the theme for the app */}
        <ThemeProvider>
          <NavigationProvider />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
