import React from 'react';
import ReactDOM from 'react-dom';

const Login = (props) => {
    return ( 
        <form>
            <fieldset class="logpass">
                <label for="userLogin">Логин:</label>
                <input type="text" id="userLogin" placeholder="login" />        
                <label for="userPassword">Пароль</label>
                <input type="text" id="userPassword" placeholder="password" />
                <button id="confirm">Войти</button>
            </fieldset>
        </form>
    );
};

export default Login;