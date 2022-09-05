import {
  GET_STARTED, ADD_SHEEP, INCREMENT, DECREMENT,
} from '../actionTypes/sheepAT';

export function getStartedAC(payload) {
  return {
    type: GET_STARTED,
    payload,
  };
}

export function addSheepAC(payload) {
  return {
    type: ADD_SHEEP,
    payload,
  };
}

export function incrementAC(payload) {
  return {
    type: INCREMENT,
    payload,
  };
}

export function decrementAC(payload) {
  return {
    type: DECREMENT,
    payload,
  };
}
