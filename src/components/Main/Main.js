import React from 'react';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <h1 className="main__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </div>
      <AboutProject />
    </div>
  );
}

export default Main;