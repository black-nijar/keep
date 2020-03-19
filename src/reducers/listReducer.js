import { ADD_CARD, ADD_LIST } from "../actions/actionTypes";

const initState = [
  {
    title: 'Today',
    id: 0,
    cards: [
      { id: 0, text: 'buy milk' },
      { id: 1, text: 'buy coffee' }
    ]
  },
  {
    title: 'Tomorrow',
    id: 1,
    cards: [
      { id: 0, text: 'buy pizza' },
      { id: 1, text: 'buy cheese' },
      { id: 2, text: 'buy cherry' }
    ]
  },

];
const listReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload ,
        cards: [],
        id: new Date().getTime()
      }
      return [...state, newList];
    case ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: new Date().getTime()
      }
      const newState = state.map((list => {
        if (list.id === action.payload.id) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list;
        }
      }))
      return newState;
    default:
      return state;
  }
}

export default listReducer;