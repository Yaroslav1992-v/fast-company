import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../../form/textField";
import CheckBoxField from "../../form/checkBoxField";
const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не коректно" }
        },
        password: {
            isRequired: { message: " Пароль обязателен для заполнения" },
            isCaptialSymbol: { message: " Пароль должен содержать заглавную букву" },
            isContainDigit: { message: " Пароль должен содержать число" },
            min: {
                message: " Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };
    useEffect(() => { validate(); }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).keys === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return 0;
        }
    };
    return (<form onSubmit={handleSubmit}>
        <TextField label="Электронная почта" type="text" name="email" value={data.email} onChange={handleChange} error={errors.email} />
        <TextField label="Пароль" type="password" name="password" value={data.password} onChange={handleChange} error={errors.password} />
        <CheckBoxField
            value={data.stayOn}
            onChange={handleChange}
            name="stayOn">
            Оставаться в системе
        </CheckBoxField>
        <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
    </form>);

};
export default LoginForm;
