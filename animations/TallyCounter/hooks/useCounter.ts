import { useState } from "react";

export default function useCounter() {
    // Local States
    const [Counter, SetCounter] = useState<number>(0);

    // function to increase counter
    const IncreaseCounter = () => SetCounter(Counter + 1);

    // function to decrease counter
    const DecreaseCounter = () => SetCounter(Counter - 1 > 0 ? Counter - 1 : 0);

    return {
        Counter,
        IncreaseCounter,
        DecreaseCounter
    }
}