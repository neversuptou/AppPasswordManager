import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import {HashRouter, Route, Routes} from "react-router-dom";
import {AllPasswords} from "./pages/AllPasswrods.jsx";


const container = document.getElementById('root')


const root = createRoot(container)

root.render(
    <React.StrictMode>
        <HashRouter basename={"/"}>

            <Routes>
                <Route path="/"  element={<App/>} />
                <Route path="/AllPasswords" element={<AllPasswords />} />
                {/*<App/>*/}
            </Routes>
        </HashRouter>
    </React.StrictMode>
)