/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAC, incrementAC } from '../../redux/actionCreators/sheepAC';
import style from './Sheep.module.css';
import up from './up_orange_buttons.png';
import down from './down_orange_buttons.png';

function Sheep({ s }) {
  const dispatch = useDispatch();
  const { sheeps, totalCount } = useSelector((state) => state.count);
  const [time, setTime] = useState(null);

  return (
        <div className={style.sheep}>
            {s.time
              ? <></>
              : <div className={style.change}
                    onClick={() => dispatch(incrementAC(s.sheepPos))}
                >
                    <img src={up} alt="Увеличить" />

                </div>
            }
            <label className={style.sheepCounter}>
                {s.sheepCount}
            </label>
            {s.time
              ? <></>
              : <div className={style.change}
                    onClick={() => dispatch(decrementAC(s.sheepPos))}
                >
                    <img src={down} alt="Уменьшить" />
                </div>
            }
        </div>
  );
}

export default Sheep;
