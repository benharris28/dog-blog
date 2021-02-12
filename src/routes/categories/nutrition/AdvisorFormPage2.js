import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import Select from 'react-select';
import DogApiService from '../../../services/dog-api-service'
import * as dayjs from 'dayjs'

const AdvisorFormPage2 = () => {
    const history = useHistory();

    const [{ dog, progress }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        dog_breed: '',
        dog_year: '',
        dog_month: '',
        dog_weight: '',
        current_dog: '',
        neutered: '',
        breedError: '',
        yearError: '',
        monthError: '',
        weightError: '',
        neuterError: ''
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

    // These functions update state with values from the form

    const handleDogWeight = (event) => {
        setState({
            ...state,
            dog_weight: event
        })
    }

    const handleBreed = (event) => {
        setState({
            ...state,
            dog_breed: event
        })
    }

    const handleMonth = (event) => {
        setState({
            ...state,
            dog_month: event
        })
    }

    const handleYear = (event) => {
        setState({
            ...state,
            dog_year: event
        })
    }

    const handleNeutered = (event) => {
        setState({
            ...state,
            neutered: event
        })
    }



    // This function validates the completed form inputs to check if they are filled out and filled out correctly
    // An input that doesn't validate causes the variable to be set to false
    // handleValidation is called in handleSubmit, and handleSubmit only runs if this passes


    const handleValidation = () => {
        let formIsValid = true;

        if (!state.dog_breed) {
            formIsValid = false;

            setState({
                ...state,
                breedError: 'Please select a breed'
            })
        }

        if (!state.dog_year.value) {
            formIsValid = false;

            setState({
                ...state,
                yearError: 'Please select a year'
            })
        }



        if (!state.dog_month) {
            formIsValid = false;
            setState({
                ...state,
                monthError: 'Cannot be empty'
            })
        }

        if (!state.dog_weight) {
            formIsValid = false;
            setState({
                ...state,
                weightError: 'Please enter a weight'
            })
        }

        if (!state.neutered.value) {
            formIsValid = false;
            setState({
                ...state,
                neuterError: 'Please select an option'
            })
        }

        return formIsValid
    }

    // Called when user clicks on "Submit"
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (handleValidation()) {

            

            // Convert input values for day and month into actual birthdate
            const today = dayjs();
            const birthday = dayjs(today).subtract(`${state.dog_year.value}`, 'years').subtract(`${state.dog_month.value}`, 'months').format('YYYY-MM-D')

            // Calculate RER and patch

            const weightKG = state.dog_weight / 2.205
            const rer = 70 * ((weightKG) ** (3 / 4))

            // Create dog object that will update the dog entry in the database
            const updatedDog = {
                id: state.current_dog,
                breed: state.dog_breed.value,
                birthday: birthday,
                weight: state.dog_weight,
                rer: rer,
                neutered: state.neutered.value
            }

            // patch dog profile and move to next page in form
            DogApiService.updateDog(updatedDog, state.current_dog)
                .then(res => {
                    history.push('/foodadvisor/page-three')
                })

        }



    }


    // Option values for each of the questions with dropdowns


    const options = [
        { value: 'golden-retriever', label: 'Golden Retriever' },
        { value: 'bulldog', label: 'Bulldog' },

    ]

    const yearOptions = [
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
    ]

    const monthOptions = [
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
    ]

    const neuteredOptions = [
        { value: 'true', label: 'Neutered' },
        { value: 'false', label: 'Not neutered' },

    ]




    return (
        <div>
            <div className="landing-flex-container full">
                <div className="landing-container">
                    <div style={{ margin: "auto" }} className="step-header">
                        <p className="step-heading">Step 2 of 6</p>
                    </div>
                    <h2 className="section-heading">Let's customize for age and breed</h2>




                    <div className="food-form-container">

                        <div>
                            <div className="form-container">
                                <form className="food-form">





                                    <div className="form-page-two">

                                        <div className="question-box">
                                            <p className="question-title">What is your dog's breed?</p>
                                            <Select
                                                defaultValue={[options[0]]}
                                                value={state.dog_breed}
                                                name="dog_breed"
                                                options={options}
                                                className="basic-single"
                                                classNamePrefix="select"
                                                placeholder="Type to search..."
                                                onChange={handleBreed}
                                            />
                                            {state.breedError && <span className="validation-error">{state.breedError}</span>}
                                        </div>

                                        <div className="question-box">
                                            <p className="question-title">What is your dog's age?</p>
                                            <div className="flex-container">

                                                <Select

                                                    className="age-input"
                                                    options={yearOptions}
                                                    value={state.dog_year}
                                                    name="dog_year"
                                                    onChange={handleYear}
                                                    placeholder="0"
                                                />

                                                <label className="age-input-label">years</label>

                                                <Select
                                                    defaultValue={[monthOptions[0]]}
                                                    className="age-input"
                                                    name="dog_month"
                                                    options={monthOptions}
                                                    value={state.dog_month}
                                                    onChange={handleMonth}
                                                    placeholder="0"
                                                />

                                                <label className="age-input-label">months</label>


                                            </div>
                                            {state.yearError && <span className="validation-error">{state.yearError}</span>}
                                            {state.monthError && <span className="validation-error">{state.monthError}</span>}
                                        </div>


                                        <div className="question-box">
                                            <p className="question-title">What is your dog's weight?</p>
                                            <input
                                                type="number"
                                                name="dog_weight"
                                                onChange={(e) => handleDogWeight(e.target.value)}
                                                value={state.dog_weight}
                                                placeholder="Weight in lbs"
                                            >

                                            </input>
                                            {state.weightError && <span className="validation-error">{state.weightError}</span>}
                                        </div>

                                        <div className="question-box">
                                            <p className="question-title">Is your dog neutered?</p>


                                            <Select

                                                defaultValue={neuteredOptions[0]}
                                                value={state.neutered}

                                                name="neutered"
                                                options={neuteredOptions}
                                                className="basic-single"
                                                classNamePrefix="select"
                                                placeholder="Is your dog neutered?"
                                                onChange={handleNeutered}
                                            />






                                            {state.neuterError && <span className="validation-error">{state.neuterError}</span>}
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
                <div className="landing-container">
                    <img className="landing-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1611283410/iStock-1207312370_izcmcf.jpg" alt="dog looking at camera" />
                </div>

            </div>

        </div>
    )


}

export default AdvisorFormPage2;
