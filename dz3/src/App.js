import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';

const App = (props) =>{
    const items = [
        {href:'/', title: 'Главная'},
        {href:'/about', title: 'О компании'},
        {href:'/catalog', title: 'Каталог'},
        {href:'/events', title: 'Акции'},
        {href:'/contacs', title: 'Контакты'},
    ];
    return(
        <div>
        <h2>Аутентификация</h2>
        <Login/>
        <Menu items={items} titleMenu="Основное меню"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));


