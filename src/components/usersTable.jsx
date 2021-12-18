import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookMark";
import QualitiesList from "./qualitesList";
import Table from "./table";
const UserTable = (userCrop) => {
    const { users, onSort, selectedSort, handleBookMark, handleDelete } =
        userCrop;
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Kачества",
            component: (user) => (
                <QualitiesList qualities={user.qualities}></QualitiesList>
            )
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился,Раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookMark",
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
        <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users}/>
    );
};

UserTable.protoTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};
export default UserTable;
