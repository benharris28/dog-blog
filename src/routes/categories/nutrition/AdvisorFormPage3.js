import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import DogApiService from '../../../services/dog-api-service'
import * as dayjs from 'dayjs'

const AdvisorFormPage3 = () => {
   

    const history = useHistory();

    const [{ dog, progress }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        dog_name: '',
        email: '',
        user_id: '',
        body_position: '',
        dog_profile: '',
        bodyPositionError: ''
    })

    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);

        const dogId = localStorage.getItem('dogId')

        setState({ ...state, current_dog: dogId })

        updateDog()
    }, []);

    
    const updateDog = () => {
        // const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null
         const dogId = Number(localStorage.getItem('dogId'))
         
         if(dogId) {
         DogApiService.getDogById(dogId)
         .then(res => {
                 console.log(res)
                 dispatch({ type: 'UPDATE_DOG', payload: res })
             
         })
         .catch(err => console.log(err))
         } 
     
     
     }


   
    const categorizeDog = () => {
        // Check the day

        const today = dayjs();
        const birthday = dayjs(dog.birthday)
        const age = today.diff(birthday, 'month')

        let multiplier;

        if (age <= 4) {
            multiplier = 3;
        }

        if (age > 4 && age <= 12) {
            multiplier = 2
        }

        if (age > 12 && state.body_position === 'underweight' && dog.neutered === true) {
            multiplier = 1.6
        }

        if (age > 12 && state.body_position === 'ideal-weight' && dog.neutered === true) {
            multiplier = 1.5
        }

        if (age > 12 && state.body_position === 'overweight' && dog.neutered === true) {
            multiplier = 1.0
        }

        if (age > 12 && state.body_position === 'underweight' && dog.neutered === false) {
            multiplier = 1.8
        }

        if (age > 12 && state.body_position === 'ideal-weight' && dog.neutered === false) {
            multiplier = 1.6
        }

        if (age > 12 && state.body_position === 'overweight' && dog.neutered === false) {
            multiplier = 1.2
        }

        return multiplier
    }



    const handleBodyPosition = (e) => {
        setState({
            ...state,
            body_position: e.target.value
        })
    }


    const handleValidation = () => {
        let formIsValid = true;

        if (!state.body_position) {
            formIsValid = false;
            setState({
                ...state,
                bodyPositionError: 'Please select an option'
            })
        }




        return formIsValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (handleValidation()) {

     

            // calculate multiple
            const { body_position } = state;

            const multiplier = categorizeDog()
            const calorie_requirement = dog.rer * multiplier

            // Patch results


            const updatedDog = {
                body_position: state.body_position,
                rer_multiple: multiplier,
                calorie_requirement: calorie_requirement
            }

            // patch dog profile
            DogApiService.updateDog(updatedDog, dog.id)
                .then(res => {
                    history.push('/foodadvisor/page-four')
                })


        }

        else {
            alert('Please select an option')
        }
    }


   





        return (
            <div>
                  <div className="landing-flex-container full">
                    <div className="landing-container full">
                        <div style={{ margin: "auto" }} className="step-header">
                            <p className="step-heading">Step 3 of 6</p>
                        </div>
                        <h2 className="section-heading">Let's get the portioning right</h2>
                        <p className="section-subheading">Which best describes your dog's appearance?</p>
                        <div>
                            <div className="form-container">
                                <form className="food-form">







                                    <div className="form-page-three">
                                        <div className="question-box">
                                            



                                            <div className="flex-container space-evenly">
                                                <label className={state.body_position === "underweight" ? "test-label checked-option" : "test-label"} htmlFor="underweight">
                                                    <div className="body-position-icon-box">
                                                        <img className="body-position-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1607484912/Screen_Shot_2020-12-08_at_10.34.05_PM_rsr1pu.png" />
                                                    </div>

                                                    <p className="body-position-title">Underweight</p>
                                                    <p>Ribs very visible</p>
                                                </label>
                                                <label className={state.body_position === "ideal-weight" ? "test-label checked-option" : "test-label"} htmlFor="ideal-weight">
                                                    <div className="body-position-icon-box">
                                                        <img className="body-position-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1607484912/Screen_Shot_2020-12-08_at_10.33.31_PM_rc8aii.png" />
                                                    </div>

                                                    <p className="body-position-title">Ideal Weight</p>
                                                    <p>Ribs very visible</p>
                                                </label>
                                                <label className={state.body_position === "overweight" ? "test-label checked-option" : "test-label"} htmlFor="overweight">
                                                    <div className="body-position-icon-box">
                                                        <img className="body-position-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1607484912/Screen_Shot_2020-12-08_at_10.33.50_PM_nqr25v.png" />
                                                    </div>
                                                    <div>

                                                    <p className="body-position-title">Overweight</p>
                                                    <p>Ribs very visible</p>
                                                    </div>
                                                </label>
                                            </div>

                                            <div className="no-show">
                                                <input
                                                    type="radio"
                                                    className="form-radio"
                                                    name="underweight"
                                                    value="underweight"
                                                    id="underweight"
                                                    onChange={handleBodyPosition}
                                                    checked={state.body_position === "underweight" ? true : false} />

                                                <input
                                                    type="radio"
                                                    className="form-radio"
                                                    name="ideal-weight"
                                                    id="ideal-weight"
                                                    value="ideal-weight"
                                                    onChange={handleBodyPosition}
                                                    checked={state.body_position === "ideal-weight" ? true : false} />

                                                <input
                                                    type="radio"
                                                    className="form-radio"
                                                    name="overweight"
                                                    value="overweight"
                                                    id="overweight"
                                                    onChange={handleBodyPosition}
                                                    checked={state.body_position === "overweight" ? true : false} />
                                            </div>

                              

                                        </div>

                                       
                                            <button className="landing-button"
                                                onClick={handleSubmit}>
                                                Next
                                    </button>
                                   

                                    </div>



                                </form>
                            </div>
                        </div>

                    </div>
                    

                </div>
           
            </div>
        )

    
}

export default AdvisorFormPage3;
