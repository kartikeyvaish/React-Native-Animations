// Packages Imports (from node_modules)
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

// Local Imports (components/types/utils)
import Digit from "./Digit";

dayjs.extend(duration);

// interface for Timer component
export interface TimerProps {}

let endTime = dayjs().add(1, "day");

// functional component for Timer
function Timer(props: TimerProps) {
  // Destructuring props
  const {} = props;

  const [number, setNumber] = useState(0);

  const [time, setTime] = useState<string>();

  useMemo(() => {
    var currentTime = dayjs();
    var diffTime = endTime.unix() - currentTime.unix();

    var duration = dayjs.duration(diffTime * 1000, "milliseconds");
    var interval = 1000;
    const twoDP = (n: number) => (n > 9 ? n : "0" + n);

    setInterval(function () {
      duration = dayjs.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );

      let analogTimeStamp = "";
      duration.days() ? (analogTimeStamp += `${duration.days()}:`) : "";
      duration.hours()
        ? (analogTimeStamp += `${twoDP(duration.hours())}:`)
        : "";
      duration.minutes()
        ? (analogTimeStamp += `${twoDP(duration.minutes())}:`)
        : "";
      duration.seconds()
        ? (analogTimeStamp += `${twoDP(duration.seconds())}`)
        : "";

      setTime(analogTimeStamp);
    }, interval);
  }, [endTime]);

  // render
  return (
    <BlurView
      onTouchEnd={() => setNumber(number === 9 ? 0 : number + 1)}
      intensity={30}
      tint="light"
      style={styles.container}
    >
      {time?.split("").map((char: string, index) => {
        let digitValue = char === ":" ? ":" : parseInt(char);

        return <Digit digit={digitValue} key={index.toString()} />;
      })}
    </BlurView>
  );
}

// exports
export default Timer;

// styles for Timer
const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 70,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
