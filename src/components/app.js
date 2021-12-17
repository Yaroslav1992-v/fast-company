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
        const mark = document.getElementById(id);
        if (mark.className === "bi bi-bookmark") {
            mark.className += "-fill";
        } else {
            mark.className = "bi bi-bookmark";
        }
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
