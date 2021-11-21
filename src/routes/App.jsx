import React from "react";
import "../styles/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../containers/Layout";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";



const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact={true} path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}


export default App;