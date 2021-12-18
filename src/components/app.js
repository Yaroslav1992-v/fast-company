import React, { useState, useEffect } from "react";
import api from "../api";
import Users from "./users";
function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((id) => id._id !== userId));
    };
    const handleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <div>
            <Users
                people={users}
                handleDelete={handleDelete}
                handleBookMark={handleBookMark}
            ></Users>
        </div>
    );
}
export default App;
