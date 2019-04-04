const initialState = {
  x: 0,
  foldStun: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_X':
      if (state.x >= 3) {
        return state;
      } else {
        return {
          ...state,
          x: state.x + 1
        };
      }
    case 'INCREMENT_X':
      if (state.x >= 3) {
        return state;
      } else {
        return {
          ...state,
          x: state.x + 1
        };
      }

    default:
      return state;
  }
};
