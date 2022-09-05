import React from 'react';
import style from './Cv.module.css';
import avatar from './ava-tlg.jpg';
import github from './github.png';
import hh from './hh.png';
import tlg from './telegram.png';
import phone from './phone.png';

function Cv() {
  return (
    <div className={style.CV}>
      <div className={style.wrapper}>
        <h3>Разработчик</h3>
        <div className={style.cvIcons}>
          <a href="https://www.npmjs.com/package/sheep-counter"><img src={avatar} alt="START" /></a>
          <a href="https://github.com/Pauolosavery"><img src={github} alt="START" /></a>
          <a href="https://spb.hh.ru/resume/d5c69900ff07481a2a0039ed1f61314e426359"><img src={hh} alt="START" /></a>
          <a href="https://t.me/pavel_trader"><img src={tlg} alt="START" /></a>
          <a href="tel:+79817661478"><img src={phone} alt="START" /></a>
        </div>
        <p>React API</p>
        <p>2022</p>
      </div>
    </div>
  );
}

export default Cv;
