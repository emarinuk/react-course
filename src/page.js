import React from "react";
import Header from "./header";
export default function Page() {
    const name = "Lucas"
    return (
        <>
            <Header name={name} />
            <p>First</p>
            <p>Second</p>
        </>
    );
}

const age = 10;