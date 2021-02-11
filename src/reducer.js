import DogApiService from './services/dog-api-service'


export const initialState = {
    dog: {},
    progress: ''

};



const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: action.payload
      }
    case 'UPDATE_DOG':
      return {
        ...state,
        dog: action.payload
      }
    default:
      return state;
  }
}

export default reducer;