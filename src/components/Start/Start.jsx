import React from 'react';
import { Link } from 'react-router-dom';
import start from './start_orange_buttons.png';
import style from './Start.module.css';
import Cv from '../Cv/Cv.jsx';

function Start() {
  return (
    <div className="Start">
      <h1>Счётчик</h1>
      <div className={style.startBtn}>
        <Link to="/main">
          <img src={start} alt="START" />
        </Link>
      </div>
      <Cv />
    </div>
  );
}

export default Start;
