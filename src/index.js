import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Header(props) {
    const clock = Date().toLocaleString();
    return (
        <h1 className="orange">Hello, {props.name}! {clock}</h1>
    );

}
function Page() {
    const name = "Lucas"
    return (
        <>
            <Header name={name} />
            <p>First</p>
            <p>Second</p>
        </>
    );
}

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

setInterval(
    function(){root.render(<Page />);},1000);