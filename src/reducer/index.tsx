import { combineReducers } from 'redux';

type Action = {
  type: string;
  payload: any;
}
type Item = {
  id: string;
}
const ImagesReducer = (state = [], action: Action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'ADD_IMAGE':
      return [...state, payload];
    case 'CREATE_LIST':
      return [...state, ...payload];
    case 'DELETE_IMAGES':
      let newState = state.filter((item: Item) => {
        return !payload.includes(item.id);
      });
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  Images: ImagesReducer
});