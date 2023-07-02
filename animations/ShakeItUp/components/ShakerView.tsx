// Packages Imports
import { StyleSheet, ScrollView, StyleProp, ViewStyle } from "react-native";

// Local Imports
import Item from "./Item";
import { ITEM_HEIGHT } from "../constants/configs";

// interface for ShakerView
export interface ShakerViewProps {
  data: Array<any>;
  itemHeight?: number;
  testID?: string;
}

// function component for ShakerView
function ShakerView(props: ShakerViewProps) {
  // Destructuring props
  const { data, itemHeight, testID } = props;

  // scroll view heightt
  const scrollViewHeight = itemHeight ? itemHeight : Math.floor(data.length / 2) * ITEM_HEIGHT;

  // container styles
  const containerStyles: StyleProp<ViewStyle> = [
    styles.container,
    {
      height: scrollViewHeight,
    },
  ];

  // render
  return (
    <ScrollView testID={testID} contentContainerStyle={containerStyles} scrollEnabled>
      {data.map((item, index) => (
        <Item id={item.id} source={item.source} key={index} />
      ))}
    </ScrollView>
  );
}

// exports
export default ShakerView;

// styles
const styles = StyleSheet.create({
  container: { flexWrap: "wrap", flexDirection: "row" },
});
