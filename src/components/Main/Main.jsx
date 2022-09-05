import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sheep from '../Sheep/Sheep.jsx';
import { addSheepAC, getStartedAC } from '../../redux/actionCreators/sheepAC';
import toStartPage from './to_main_orange_buttons.png';
import plus from './plus_orange_buttons.png';
import style from './Main.module.css';

function Main() {
  const dispatch = useDispatch();
  const { sheeps } = useSelector((state) => state.count);
  useEffect(() => {
    setInterval(() => {
      dispatch(getStartedAC());
    }, 1000);
  }, []);
  return (
    <div className="Main">
      <div className={style.startBtn}>
        <Link to="/">
          <img src={toStartPage} alt="На стартовую" />
        </Link>
      </div>
      <br />
      <div className={style.zabor} />
      <div className={style.hill}>
        {sheeps.map((s) => (
          <Sheep key={s.sheepPos} s={s} />
        ))}
        <div className={style.addSheep}
          onClick={() => dispatch(addSheepAC())}
        >
          <img src={plus} alt="На стартовую" />
        </div>
      </div>
    </div>
  );
}

export default Main;
