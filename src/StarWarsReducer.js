const initialState = {
  fetching: false,
  people: []
};

export const StarWarsPeople = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'FETCH_STAR_WARS_REQUEST':
      return {...state, fetching: true };
    case 'FETCH_STAR_WARS_SUCCESS':
      console.log('fetch success', data);
      return { ...state, people: data, fetching: false };
    default: return state;
  }
};
