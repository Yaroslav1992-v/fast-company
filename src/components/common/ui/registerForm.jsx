import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../../form/textField";
import api from "../../../api";
import SelectField from "../../form/selectField";
import RadioField from "../../form/radioField";
import MultiSelectField from "../../form/multiSelectField";
import CheckBoxField from "../../form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    });
    const [qualities, setQualitie] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualitie(data));
    }, []);
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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        license: {
            isRequired: {
                message:
                    "Вы не можете использовать наше сервиз без подверждения лецинзионого соглашения"
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
        <SelectField
            label="Выберите вашу профессию"
            value={data.profession}
            defaultOption={data.profession}
            onChange={handleChange}
            options={professions}
            name="profession"
            error={errors.profession} />
        <RadioField options={[{ name: "male", value: "male" }, { name: "female", value: "female" }, { name: "other", value: "other" }]}
            value={data.sex}
            name="sex"
            onChange={handleChange}
            label="Выберите ваш пол" />
        <MultiSelectField
            options={qualities}
            onChange={handleChange}
            defaultValue={data.qualities}
            name="quialities"
            label="Выберите ваши качества" />
        <CheckBoxField
            value={data.license}
            onChange={handleChange}
            name="license"
            error={errors.license}>
            Подвердить <a>Лицензионое соглашение</a>
        </CheckBoxField>
        <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
    </form>);

};

export default RegisterForm;
