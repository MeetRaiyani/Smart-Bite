import React from "react";

import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import App from "../App";
import Dashboard from '../components/dashboard/Dashboard'
import AddMenu from '../components/AddMenu/AddMenu';
import ManageMenu from '../components/ManageMenu/ManageMenu'
import Users_detail from "../components/users/Users_detail";
import Update from "../components/UpdateRecipie/Update";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Privateroute from "../components/PrivateComponent/Privateroute";
import Order from "../components/Orders/Orders";
import OrderDetail from "../components/Orders/OrderDetail/OrderDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="" element={<Privateroute/>}>
                <Route path="" element={<Dashboard/>}/>
                <Route path="add" element={<AddMenu/>}/>
                <Route path="orders" element={<Order/>}/>
                <Route path="order/:id" element={<OrderDetail/>} />
                <Route path="manage" element={<ManageMenu/>}/>
                <Route path="users-detail" element={<Users_detail/>}/>
                <Route path="manage/update/:id" element={<Update/>}/>
            </Route>
        </Route>
    )
)


export default router