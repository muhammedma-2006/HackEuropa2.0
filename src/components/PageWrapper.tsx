"use client";

import { useState } from "react";
import IntroOverlay from "./IntroOverlay";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const [entered, setEntered] = useState(false);

    return (
        <>
            {!entered && <IntroOverlay onEnter={() => setEntered(true)} />}
            {children}
        </>
    );
}
