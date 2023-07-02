// Packages Imports
import { useEffect, useState } from "react";

// Local Imports
import { SampleData } from "./constants/configs";
import { ShakeDetector } from "./helpers/ShakeDetector";
import ShakerView from "./components/ShakerView";
import { ShuffleArray } from "./helpers/HelperFunctions";

// function component for ShakeItUp
function ShakeItUp() {
  // Local States
  const [Data, SetData] = useState<typeof SampleData>(SampleData);

  // listener to trigger shuffling on phone shake
  useEffect(() => {
    ShakeDetector.addListener(Shuffle);

    return () => {
      ShakeDetector.removeListener();
    };
  }, []);

  // function to shuffle list
  const Shuffle = () => SetData(ShuffleArray(Data));

  // render
  return <ShakerView testID='shaker-view' data={Data} />;
}

// exports
export default ShakeItUp;
