import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainPage from "./Pages/Main Page/App.js"
import OrdersPage from "./Pages/Orders Page/App.js"

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<MainPage/>}></Route>
                <Route path = "/pedidos" element = {<OrdersPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes
