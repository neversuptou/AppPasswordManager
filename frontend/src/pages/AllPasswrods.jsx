import Header from "../Components/Header";
import {GetPass} from "../../wailsjs/go/main/App.js";
import React, { useEffect, useState } from 'react';

const password = GetPass() // ARRAY

export const AllPasswords = () => {
    const [password, setPassword] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPass();
            setPassword(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <h1>Все пароли</h1>
            <div className={"main-shedule"}>
                <div className="passwordContainer">
                    <ul>
                        {password.map((item, index) => (
                            <li key={index}>
                                <div>id: {item.id}</div>
                                <div>Url-сайта: {item.url}</div>
                                <div>Логин: {item.login}</div>
                                <div>Пароль: {item.password}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};