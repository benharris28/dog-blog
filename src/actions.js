import DogApiService from './services/dog-api-service'
import { useStateValue } from './StateProvider'

export const updateProgress = (value) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_PROGRESS', payload: value })
}}

export const updateDog = () => {
    const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null


    if(dogId) {
    DogApiService.getDogById(dogId)
    .then(res => {
        return (dispatch) => {
            dispatch({ type: 'UPDATE_DOG', payload: res[0] })
        }
    })
    .catch(err => console.log(err))
    } 


}
