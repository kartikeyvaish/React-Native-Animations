// Packages imports
import { createContext } from "react";

// Local imports
import { MenuItem } from "../types/Types";

export interface DetailsSheetContextProps {
    currentItem: MenuItem | null;
    selectCurrentItem: (item: MenuItem) => void
    closeSheet: () => void;
}

const DetailsSheetContext = createContext<DetailsSheetContextProps>({
    currentItem: null,
    selectCurrentItem: () => { },
    closeSheet: () => { }
});

export default DetailsSheetContext;