import React from "react";
import { useParams } from "react-router-dom";
import People from "../page/usersListPage/index";
import UserPage from "../page/userPage";
const Users = () => {
    const { userId } = useParams();
    if (userId) {
        return <UserPage id={userId} ></UserPage>;
    } else {
        return <People></People>;
    }
};

export default Users;
