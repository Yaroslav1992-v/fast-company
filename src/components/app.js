import React, { useState } from "react";
import api from "../api";
import searchStatus from "./searchStatus";
import Users from "./users";
function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
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
                search={searchStatus}
            ></Users>
        </div>
    );
}
export default App;
