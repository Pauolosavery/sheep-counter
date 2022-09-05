/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable default-param-last */
import {
  GET_STARTED, ADD_SHEEP, INCREMENT, DECREMENT,
} from '../actionTypes/sheepAT';

const countReducer = (state = { sheeps: [] }, action) => {
  let sheepCount = 0;
  const genCount = () => {
    sheepCount = state.sheeps.reduce((acc, curr) => acc + curr.sheepCount, 0);
    return sheepCount;
  };
  const objCount = {
    sheepPos: state.sheeps.length + 1,
    sheepCount,
  };
  const objTime = {
    sheepPos: state.sheeps.length + 1,
    sheepCount,
    time: true,
    id: null,
    start() {
      this.id = setInterval(() => {
        this.sheepCount += 1;
      }, 1000);
    },
    stop() {
      clearInterval(this.id);
    },
  };
  switch (action.type) {
    case GET_STARTED:
      return { ...state };
    case ADD_SHEEP:
      if (state.sheeps.length === 0) {
        state.sheeps.push({ ...objCount });
        return { ...state };
      } if ((state.sheeps.length + 1) % 4) {
        state.sheeps.push({ ...objCount, sheepCount: genCount() });
        return { ...state };
      }
      state.sheeps.push({ ...objTime, sheepCount: genCount() });
      state.sheeps[`${state.sheeps.length - 1}`].start();
      return { ...state };
    case INCREMENT:
      state.totalCount += 1;
      return {
        ...state,
        sheeps: state.sheeps.map((obj) => {
          if (obj.sheepPos === action.payload) {
            obj.sheepCount += 1;
            return obj;
          }
          return obj;
        }),
      };
    case DECREMENT:
      state.totalCount -= 1;
      return {
        ...state,
        sheeps: state.sheeps.map((obj) => {
          if (obj.sheepPos === action.payload) {
            obj.sheepCount -= 1;
            return obj;
          }
          return obj;
        }),
      };
    default:
      return state;
  }
};
export default countReducer;
