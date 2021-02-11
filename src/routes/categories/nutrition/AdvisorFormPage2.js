import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import UserApiService from '../../../services/user-api-service'
import DogApiService from '../../../services/dog-api-service'
import * as dayjs from 'dayjs'

const DogFormPageTwo = () => {
    

    const [state, setState] = useState({
        progress: '10',
        dog_name: '',
        dog_breed: '',
        dog_year: '',
        dog_month: '',
        dog_weight: '',
        current_dog: '',
        yearValue: '',
        monthValue: "0",
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

        setState({...state, current_dog: dogId})
      }, []);


    const handleFormChange = (event) => {
        setState({
            ...state,
            [event.label]: event
        })
    }

    const handleBreed = (event) => {
        setState({
            ...state,
            dog_breed: event
        })
    }






    const handleValidation = () => {
        let formIsValid = true;

        if (!state.dog_breed) {
            formIsValid = false;

            setState({
                ...state,
                breedError: 'Please select a breed'
            })
        }

        if (!state.yearValue) {
            formIsValid = false;

           setState({
               ...state,
                yearError: 'Please select a year'
            })
        }



        if (!state.monthValue) {
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

    const handleSubmit = (e) => {
        e.preventDefault()

        if (handleValidation()) {

            const { history } = this.props;

            const today = dayjs();
            const birthday = dayjs(today).subtract(`${this.state.yearValue}`, 'years').subtract(`${this.state.monthValue}`, 'months').format('YYYY-MM-D')

            // Calculate RER and patch

            const weightKG = state.dog_weight / 2.205
            const rer = 70 * ((weightKG) ** (3 / 4))

            const updatedDog = {
                id: state.current_dog,
                breed: state.dog_breed.value,
                birthday: birthday,
                weight: state.dog_weight,
                rer: rer,
                neutered: state.neutered.value
            }

            // patch dog profile
            DogApiService.updateDog(updatedDog, state.current_dog)
                .then(res => {
                    history.push('/foodadvisor/form/body-position')
                })

        }

        

    }

   


       
        const today = dayjs();
        const birthday = dayjs(today).subtract(`${state.yearValue}`, 'years').subtract(`${state.monthValue}`, 'months').format('YYYY-MM-D')
      


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
                            onChange={handleFormChange}
                            placeholder="0"
                        />

                        <label className="age-input-label">years</label>

                        <Select
                            defaultValue={[monthOptions[0]]}
                            className="age-input"
                            name="dog_month"
                            options={monthOptions}
                            value={state.dog_month}
                            onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
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

export default DogFormPageTwo;
