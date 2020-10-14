import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = ()=>{
  return <ul>
    <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
    <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
    <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
  </ul>
}

const Profile = ()=>{
  return <div className="row">
    <div className="col-2">
      <img width="60%" src="https://plugins.krajee.com/samples/default-avatar-male.png" alt=""/>
    </div>
    <div className="col-10">
      <h1>Иванов Иван</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, magnam minima nam natus nostrum odit quia totam veniam. Dolores facere facilis illo libero mollitia placeat possimus ullam unde ut velit.  </p>
    </div>
  </div>
}
const Settings = ()=>{
  return <div className="row">
    <ul className="list-group">
      <li className="list-group-item ">Иван</li>
      <button onClick="chengeName()">
        Изменить имя
      </button>
      <li className="list-group-item ">Иванов</li>
      <li className="list-group-item ">ivan@mail.ru</li>
      <li className="list-group-item ">ID # 1</li>
      <li className="list-group-item ">Изменить пароль</li>
    </ul>
  </div>
}

const Users = ()=>{
  return <div className="container">
      <div className="row">
        <div className="col-sm">
          ID
        </div>
        <div className="col-sm">
          Имя Фамилия
        </div>
        <div className="col-sm">
          Email
        </div>
      </div>
    </div>
}

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <Menu/>
            </div>
            <div className="col-9">
              <Route path="/profile" render={()=>{return <Profile/>}}/>
              <Route path="/settings" render={()=>{return <Settings/>}}/>
              <Route path="/users" render={()=>{return <Users/>}}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
