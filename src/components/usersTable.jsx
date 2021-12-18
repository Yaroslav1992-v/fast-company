import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
const UserTable = (userCrop) => {
    const { users, handleDelete, handleBookMark, onSort, selectedSort } =
        userCrop;
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Kачества" },
        professions: { iter: "profession.name", name: "Профессия" },
        completedMeetings: {
            iter: "completedMeetings",
            name: "Встретился,Раз"
        },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookMark", name: "Избранное" },
        delete: {}
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <tbody>
                {users.map((user) => (
                    <User
                        key={user._id}
                        {...user}
                        handleDelete={handleDelete}
                        handleBookMark={handleBookMark}
                    ></User>
                ))}
            </tbody>
        </table>
    );
};

UserTable.protoTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};
export default UserTable;
