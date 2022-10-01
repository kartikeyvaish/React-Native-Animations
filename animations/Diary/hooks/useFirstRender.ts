// Packages Imports
import { useEffect, useRef } from "react";

// Custom hook to handle first Launch
export default function useFirstRender() {
    /**
     * * Ref to keep track of first mount
     */
    const firstRender = useRef(true);

    // Mark First Launch
    useEffect(() => {
        if (firstRender.current)
            firstRender.current = false;
    }, []);

    // Return First Launch
    return { firstRender: firstRender.current };
}