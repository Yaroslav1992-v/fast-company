import React from "react";
import PropTypes from "prop-types";
const SelectField = ({ label, value, onChange, defaultOption, options, name, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const optionArray = !Array.isArray(options) &&
        typeof (options) === "object" ? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
        : options;
    return (<div className="mb-4">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <select
            id={name}
            className={getInputClasses()}
            name={name}
            onChange={handleChange}
            value={value}>
            <option disabled value="">{defaultOption}</option>
            {
                optionArray && optionArray.map(option => <option
                    key={option.value}
                    value={option.name}>
                    {option.name}
                </option>)
            }
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
    </div>);
};
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default SelectField;
