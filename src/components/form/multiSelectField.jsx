import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionArray = !Array.isArray(options) &&
        typeof options === "object" ? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName].name }))
        : options;
    const handleChange = (value) => {
        onChange({ name: name, value });
    };
    return (
        <div className="mb-4">
            <label className="form-label" htmlFor="">{label}</label>
            <Select
                isMulti
                options={optionArray}
                className="basic-multi-select"
                classNamePrefix="select"
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
                onChange={handleChange}
                name={name} />
        </div>
    );
};
MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    defaultValue: PropTypes.array
};

export default MultiSelectField;
