import { ChildAsFC } from "./Child";

const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log('asdf')}>
            <br/>asdfsdf<br/>
        </ChildAsFC>
    );
};

export default Parent;