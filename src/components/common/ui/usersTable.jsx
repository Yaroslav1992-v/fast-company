import React from "react";
import PropTypes from "prop-types";
import BookMark from "../bookMark";
import Qualities from "./qualities";
import Table from "../table/table";
import { Link } from "react-router-dom";
const UserTable = (userCrop) => {
    const { users, onSort, selectedSort, handleBookMark, handleDelete } =
        userCrop;
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <>
                    <Link className="link-info" to={`/users/${user._id}`}>{user.name}</Link>
                </>
            )
        },
        qualities: {
            name: "Kачества",
            component: (user) => (
                <Qualities qualities={user.qualities}></Qualities>
            )
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился,Раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => handleBookMark(user._id)}
                ></BookMark>
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.protoTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};
export default UserTable;
