import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import UserCard from "../../common/ui/userCard";
import QualitiesCard from "../../common/ui/qualitiesCard";
import MeetingsCard from "../../common/ui/meetingsCard";
import Comments from "../../common/ui/comments";
// import QualitiesList from "../../common/ui/qualities/qualitesList";
const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm" >
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.rate} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
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
