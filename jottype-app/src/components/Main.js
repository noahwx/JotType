import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import Account from "../auth/Account";

const Main = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/account' element={<Account />} />
        </Routes>
    );
}
 
export default Main;