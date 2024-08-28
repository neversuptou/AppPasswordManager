import Header from "../Components/Header";
import {GetPass} from "../../wailsjs/go/main/App.js";

window.onload = function() {
    loadPasswords();
};

async function loadPasswords() {
    const passwords = await GetPass(); // Вызов метода Go
    const passwordsContainer = document.getElementById('passwordsContainer');
    console.log(passwords)
    passwords.forEach(password => {
        const li = document.createElement('li');
        li.textContent = `ID: ${password.id}, URL: ${password.url}, Login: ${password.login}, Password: ${password.password}`;
        passwordsContainer.appendChild(li);
    });
}

// Вызов функции при загрузке страницы
window.onload = loadPasswords;

export const AllPasswords = () => {
    return(
        <><Header/>
            <h1>Все пароли</h1>
            <div className={"main-shedule"}>
                <ul>
                    <li>
                        id
                    </li>
                    <li>
                        Url-сайта
                    </li>
                    <li>
                        Логин
                    </li>
                    <li>
                        Пароль
                    </li>
                </ul>
                <div id="passwordsContainer"></div>
            </div>
        </>
    )
}