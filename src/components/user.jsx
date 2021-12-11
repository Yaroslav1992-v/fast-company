import React from "react";
import Quality from "./qualitie";
import BookMark from "./bookMark";
import PropTypes from "prop-types";
const User = (user) => {
    const { _id, name, completedMeetings, rate, handleDelete, handleBookMark } =
        user;
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{Quality(user.qualities)}</td>
            <td>{user.profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <button onClick={() => handleBookMark(_id)}>
                    <BookMark id={_id}></BookMark>
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    rate: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookMark: PropTypes.func.isRequired
};

export default User;
