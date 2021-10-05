const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";

const initialState = {
  favorites: [],
  displayFavorites: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

export default reducer;