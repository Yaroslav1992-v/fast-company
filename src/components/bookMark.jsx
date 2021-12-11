import React from "react";
import PropTypes from "prop-types";
const bookMark = (id) => {
    return <i id={id.id} className="bi bi-bookmark"></i>;
};
bookMark.propTypes = {
    id: PropTypes.string.isRequired
};
export default bookMark;
