// Packages imports
import { createContext } from "react";

// Local Imports  
import { ThemeContextProps } from "../types/ContextTypes";

// Context
const ThemeContext = createContext<ThemeContextProps>({});

// exports
export default ThemeContext;