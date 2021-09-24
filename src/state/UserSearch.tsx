import { useState } from "react";

const users = [
    {name: "Prashant", age: 78},
    {name: "User", age: 32},
    {name: "asdf", age: 12},
];
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string; age: number}|undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                Name: {user && user.name}
                <br />
                Age: {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;