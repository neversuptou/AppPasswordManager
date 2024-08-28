import {useState} from 'react';
import logo from '../assets/images/logo-universal-white.png';
import '../App.css';
import {Link} from "react-router-dom";


function App() {


    return (
        <header id="header">
            <div className={"btns-header"}>
                <img src={logo} id="header-logo" className={"header-logo"} alt="header-logo"/>
                <div className={"nav-btns"}>
                    <Link to={"/"} className={'linka'}>
                        <button className={"btn-header"}>Главная</button>
                    </Link>
                    <Link to={"/"}>
                        <button className={"btn-header"}>Добавить пароль</button>
                    </Link>
                    <Link to={"/"}>
                        <button className={"btn-header"}>Удалить пароль</button>
                    </Link>
                    <Link to={"/"}>
                        <button className={"btn-header"}>Выход</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default App
