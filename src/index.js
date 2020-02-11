import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import EducationScale from "./components/EducationScale"



ReactDOM.render(
    <Router>
        <EducationScale />
    </Router>
    , document.getElementById("root"))