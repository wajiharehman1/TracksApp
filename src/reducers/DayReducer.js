export default (state = null, action) => {
  console.log('Action in DayReducer', action);
  switch (action.type) {
    case 'select_day':
      return action.payload;
    default:
      return state;
  }
};
