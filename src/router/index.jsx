import React from "react";
import App from "../App";
import Start from "../components/Start";
import ProgramContent from "../components/ProgramContent";
import AssignmentContent from "../components/AssignmentContent";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"


const BaseRouter=()=>
    {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/content/*" element={<App />}>
                <Route path="programs" element={<ProgramContent />}></Route>
                <Route path="assignments" element={<AssignmentContent />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
    }


export default BaseRouter