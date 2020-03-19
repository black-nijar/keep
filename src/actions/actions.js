import { ADD_CARD, ADD_LIST } from "./actionTypes"

export const addList = title => {
  return {
    type: ADD_LIST,
    payload: title 
  }
};

export const addCard = (id, text) => {
  return {
    type: ADD_CARD,
    payload: {
      text,
      id
    }
  }
};