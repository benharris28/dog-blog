import DogApiService from './services/dog-api-service'


export const initialState = {
    dog: {
      issues: [],
      attributes: []
    },
    progress: '',
    width: ''

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
      case 'UPDATE_WIDTH':
      return {
        ...state,
        width: action.payload
      }
    default:
      return state;
  }
}

export default reducer;