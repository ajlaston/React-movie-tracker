import React from "react";
import {Routes, Route} from "react-router-dom";
import Explore from "../Routes/Explore";
import Home from "../Routes/Home";
import Finished from "../Routes/Finished";
import "./Body.css";


function Body() {

    return (
        <div className="body">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/watched' element={<Finished />} />
                <Route path='/explore' element={<Explore />}>
                    <Route path='/explore/:id/:name' element={<Explore />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Body;