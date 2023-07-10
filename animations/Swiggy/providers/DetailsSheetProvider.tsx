// Packages Imports (from node_modules)
import { useState } from "react";

// Named imports
import { ChildrenProps } from "../../../types/ComponentTypes";
import { MenuItem } from "../types/Types";

// Local Imports (components/types/utils)
import DetailsSheetContext from "../contexts/DetailsSheetContext";

// interface for DetailsSheetProvider component
export interface DetailsSheetProviderProps extends ChildrenProps {}

// functional component for DetailsSheetProvider
function DetailsSheetProvider(props: DetailsSheetProviderProps) {
  // Destructuring props
  const { children } = props;

  const [currentItem, setCurrentItem] = useState<MenuItem | null>(null);

  const providerValues = {
    currentItem,
    selectCurrentItem: setCurrentItem,
    closeSheet: () => setCurrentItem(null),
  };

  // render
  return (
    <DetailsSheetContext.Provider value={providerValues}>{children}</DetailsSheetContext.Provider>
  );
}

// exports
export default DetailsSheetProvider;
