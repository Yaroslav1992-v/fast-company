import React from "react";
import PropTypes from "prop-types";
const SearchBar = ({ onChange }) => {
    return (
        <form action="">
            <input
                id="search" type="search"
                placeholder="Поиск"
                onChange={(e) => { onChange(e.target.value); }}
                className="form-control w-70" />
        </form>
    );
};
SearchBar.propTypes = {
    onChange: PropTypes.func
};
export default SearchBar;
