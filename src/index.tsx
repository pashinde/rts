import ReactDom from "react-dom";
import Parent from "./props/Parent";

const App = () => {
    return <Parent />
};

ReactDom.render(
    <App />,
    document.querySelector("#root")
);