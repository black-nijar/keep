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
      { id: 2, text: 'buy cherry'}
    ]
  },
  
];
const listReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listReducer;