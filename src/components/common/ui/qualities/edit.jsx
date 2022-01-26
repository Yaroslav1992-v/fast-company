import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../../form/textField";
import api from "../../../../api";
import { useParams, useHistory } from "react-router-dom";
import SelectField from "../../../form/selectField";
import RadioField from "../../../form/radioField";
import MultiSelectField from "../../../form/multiSelectField";
const Edit = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    const [qualities, setQualitie] = useState({});
    const [data, setData] = useState({});
    const history = useHistory();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualitie(data));
    }, []);
    useEffect(() => {
        if (Object.keys(user).length > 0) {
            setData({
                email: user.email,
                name: user.name,
                profession: user.profession,
                sex: user.sex,
                qualities: user.qualities.map((qual) => {
                    return { label: qual.name, value: qual.name };
                })
            });
        };
    }, [user]);
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя не должно быть пустым"
            },
            min: {
                message: " Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не коректно" }
        }
    };
    const handleQualities = () => {
        const quallity = data.qualities.map((quall) => {
            const qual = Object.values(qualities).find((value) => quall.value === value.name);
            return qual;
        });
        return quallity;
    };
    const handleProffession = () => {
        const profession = Object.values(professions).find((prof) => prof.name === data.profession.name || prof.name === data.profession);
        return profession;
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
        data.qualities = handleQualities();
        data.profession = handleProffession();

        api.users.update(userId, data).then((data) => setUser(data));
        history.push(`/users/${userId}`);
        const isValid = validate();
        if (!isValid) {
            return 0;
        }
    };
    return (
        <> <div className="container mt-5 p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow">
                    {Object.keys(data).length === 0 ? <h2>Loading....</h2>
                        : <form onSubmit={handleSubmit}>
                            <TextField label="Имя" type="text" name="name" value={data.name} onChange={handleChange} error={errors.name} />
                            <TextField label="Электронная почта" type="text" name="email" value={data.email} onChange={handleChange} error={errors.email} />
                            <SelectField
                                label="Выберите вашу профессию"
                                value={data.profession.name}
                                defaultOption={data.profession.name}
                                onChange={handleChange}
                                options={professions}
                                name="profession"
                                error={errors.profession} />
                            <RadioField
                                options={[{ name: "male", value: "male" }, { name: "female", value: "female" }, { name: "other", value: "other" }]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={data.qualities}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button type="submit" className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Обновить</button>
                        </form>}
                </div></div></div>
        </>);

};

export default Edit;
