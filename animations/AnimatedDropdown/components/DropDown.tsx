// Packages Imports
import { useSharedValue } from "react-native-reanimated";

// Local Imports
import DropdownListItem from "./DropDownItem";
import { DropdownProps } from "../types";

const Dropdown: React.FC<DropdownProps> = props => {
  const { header, options } = props;

  // Shared Value
  const isExpanded = useSharedValue(false);

  return (
    <>
      {[header, ...options].map((item, index) => {
        return (
          <DropdownListItem
            key={index}
            index={index}
            isExpanded={isExpanded}
            dropdownItemsCount={[header, ...options].length}
            {...item}
          />
        );
      })}
    </>
  );
};

export default Dropdown;
