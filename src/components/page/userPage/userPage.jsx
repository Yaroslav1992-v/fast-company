import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../common/ui/qualities/qualitesList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <div className="card border-info mb-3" style={{ maxWidth: "20rem" }}>
                <div className="card-header "><h2 className="card-title">{user.name}</h2></div>
                <div className="card-body">
                    <h5 className="card-title">Профессия:{user.profession.name}</h5>
                    <QualitiesList qualities={user.qualities}></QualitiesList>
                    <p className="card-text">comepleted Meetings: {user.completedMeetings}</p>
                    <p className="card-text">Rate: {user.rate}</p>
                    <Link className="btn btn-primary" to={`/users/${id}/edit`}>Исправить</Link>
                </div>
            </div>);
    } else {
        return <h1>Loading...</h1>;
    }

};
UserPage.propTypes = {
    id: PropTypes.string.isRequired
};
export default UserPage;
