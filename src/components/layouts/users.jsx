import React from "react";
import { useParams } from "react-router-dom";
import People from "../users";
import UserPage from "../userPage";
const Users = () => {
    const { userId } = useParams();
    if (userId) {
        return <UserPage id={userId}></UserPage>;
    } else {
        return <People></People>;
    }
};

export default Users;
