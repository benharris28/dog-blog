import DogApiService from './services/dog-api-service'

const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null

let dogFromStorage;

if(dogId) {
  DogApiService.getDogById(dogId)
  .then(res => dogFromStorage = res[0])
  .catch(err => console.log(err))
} else { dogFromStorage = {} }


export const initialState = {
    dog: dogFromStorage,

};



const reducer = (state = { progress: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: action.payload
      }
    default:
      return state;
  }
}

export default reducer;