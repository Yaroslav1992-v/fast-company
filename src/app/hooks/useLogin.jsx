import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import { setTokens } from "../services/localStorage.service";
import { useHistory } from "react-router-dom";
const httpLogin = axios.create();
const LoginContext = React.createContext();
export const useLogin = () => {
    return useContext(LoginContext);
};
const LoginProvider = ({ children }) => {
    const history = useHistory();
    const [error, setError] = useState(null);
    async function Login({ email, password }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`;
        try {
            const { data } = await httpLogin.post(url, { email, password, returnSecureToken: true });
            setTokens(data);
            history.push("/");
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            if (code === 400) {
                if (message === "EMAIL_NOT_FOUND") {
                    const errorObject = { email: "Пользователя с таким Email не существует" };
                    throw errorObject;
                }
                if (message === "INVALID_PASSWORD") {
                    const errorObject = { password: "Не верный пароль" };
                    throw errorObject;
                }
                if (message === "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
                    const errorObject = { email: "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later" };
                    throw errorObject;
                }
            }
        }
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    return (<LoginContext.Provider value={{ Login }}>
        {children}
    </LoginContext.Provider>);
};
LoginProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default LoginProvider;
