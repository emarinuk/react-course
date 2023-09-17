import React from "react";
import Header from "./Header";
import Counter from "./Counter";

export default function Page() {
    const name = "Lucas"
    return (
        <>
            <Header name={name} />
            <p>First</p>
            <p>Second</p>
            <p><Counter /></p>
        </>
    );
}

const age = 10;