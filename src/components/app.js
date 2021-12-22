import React from "react";
import Users from "./layouts/users";
import NavBar from "./navBar";
import { Route } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
function App() {
    return (
        <>
            <NavBar />
            <Route exact path={"/"} component={Main} />
            <Route path={"/login"} component={Login} />
            <Route path={"/users/:userId?"} component={Users}></Route>
        </>
    );
}
export default App;
