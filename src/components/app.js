import React from "react";
import Users from "./layouts/users";
import NavBar from "./common/ui/navBar";
import { Route } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Edit from "./common/ui/qualities/edit";
function App() {
    return (
        <>
            <NavBar />
            <Route exact path={"/"} component={Main} />
            <Route path={"/login:type?"} component={Login} />
            <Route exact path={"/users/:userId?"} component={Users}></Route>
            <Route path={"/users/:userId?/edit"} component={Edit}></Route>
        </>
    );
}
export default App;
