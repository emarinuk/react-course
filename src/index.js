import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
    const myH1 = React.createElement(
        "h1", null, `Hi ${Date().toLocaleString()}`
    )
    const myP = React.createElement(
        "p", null, "This is the first paragraph"
    )
    const myPP = React.createElement(
        "p", null, "This is the last paragraph"
    )
    const myList = React.createElement(
        "ul", null, [React.createElement("li", null, "One"),React.createElement("li", null, "Two")]
    )
    const myDiv = React.createElement(
        "div", null, [myH1, myP, myList, myPP]
    )

    return myDiv;
}


const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

setInterval(
    function(){root.render(Page());},1000);