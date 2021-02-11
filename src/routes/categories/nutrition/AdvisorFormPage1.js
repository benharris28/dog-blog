import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router'
import Select from 'react-select';
import UserApiService from '../../../services/user-api-service'
import DogApiService from '../../../services/dog-api-service'
import { useStateValue } from '../../../StateProvider'
import { updateDog, updateProgress } from '../../../actions'

const AdvisorFormPage1 = () => {
    const history = useHistory();
    const [{ dog, progress }, dispatch] = useStateValue()
    
    
    
    const [dogName, setDogName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [user_id, setUserId] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cityError, setCityError] = useState('');


    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);
        
        //updateProgress(10)

        dispatch({
            type: 'UPDATE_PROGRESS',
            payload: 30
        })

        const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null

        dispatch({
            type: 'UPDATE_DOG',
            payload: Number(dogId)
        })

        updateDog()

        
      }, []);

    
      const updateDog = () => {
        // const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null
         const dogId = Number(85)
         
         if(dogId) {
         DogApiService.getDogById(dogId)
         .then(res => {
                 console.log(res)
                 dispatch({ type: 'UPDATE_DOG', payload: res })
             
         })
         .catch(err => console.log(err))
         } 
     
     
     }


    
    const handleChange = (city) => {
        setCity(city)
    }
  
    const validateEmail = (email) => {
     
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    

    }

    const handleValidation = () => {
        let formIsValid = true;

        if(!dogName) {
            formIsValid = false;
            
            setNameError('Cannot be empty')
            
        }

        if(!email) {
            formIsValid = false;

            setEmailError('Cannot be empty')
        }


        const validatedEmail = validateEmail(email)

        if(validatedEmail !== true) {
            formIsValid = false;
        
            setEmailError('Please enter a valid email address')
           
        }

        if(!city.value) {
            formIsValid = false;
          
            setCityError('Cannot be empty')
           
        }

        return formIsValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // create user account with email and city
    
        if(handleValidation()) {

        

        
        const newUser = {
            email: email.toLowerCase(),
            city: city.value
        }

        const newDog = {
            name: dogName.toLowerCase(),
            city: city.value,
            user_id: user_id,
            email: email
        }

        // Check if user exists: if they do, run a patch. If they don't, create new account
        console.log(newUser)
        
      
            UserApiService.createUser(newUser)
                .then(res => {
                    setUserId(res.id)
                    createNewDog(res.id)
                })
                
       
     
       
    }}

    const createNewDog = (id) => {

        

        const newDog = {
            name: dogName.toLowerCase(),
            city: city.value,
            user_id: id,
            email: email
        }

        DogApiService.createDog(newDog)
                .then(res => {
                    localStorage.setItem('dogId', res.id)

                    DogApiService.createSelections(res.id)
                    
                    history.push('/foodadvisor/page-two')
                                    })

       
                                }

                                
        
    

    
    



    
        

        const cityOptions = [
            { value: '1', label: 'Toronto' },
            { value: '2', label: 'New York' },
            { value: '3', label: 'Los Angeles' },
            { value: '4', label: 'Chicago' },
            { value: '5', label: 'Vancouver' },
          
        ]


        return (
            <div>
            <div className="landing-flex-container full">
            <div className="landing-container">
                <div style={{ margin: "auto" }} className="step-header">
                    <p className="step-heading">Step 1 of 6</p>
                </div>
                <h2 className="section-heading">Who is the doggo we're mealplanning for?</h2>
                

                <div className="food-form-container">
              
              <div>
                  <div className="form-container">
                      <form className="food-form">

                   

                     
                              <div className="form-page-one">
                                  <div className="question-container">
                                      <label className="form-label" htmlFor="dog-name">What is your dog's name?</label>
                                      <input
                                          type="text"
                                          name="dog-name"
                                          value={dogName}
                                          placeholder="Dog's Name"
                                          onChange={(e) => setDogName(e.target.value)}
                                      >

                                      </input>
                                      {nameError && <span className="validation-error">{nameError}</span>}
                                  </div>

                            


                                  <div className="question-container">
                                      <label className="form-label" htmlFor="person-email">What is your email?</label>
                                      <input
                                          type="email"
                                          name="person-email"
                                          value={email}
                                          placeholder="Email"
                                          onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                          required
                                      >

                                      </input>
                                      {emailError && <span className="validation-error">{emailError}</span>}
                                  </div>

                                  <div className="question-container">
                                      <label className="form-label">What city do you live in?</label>
                                      <Select
                                          defaultValue={cityOptions[0]}
                                          value={city}
                                         
                                          name="city"
                                          options={cityOptions}
                                          className="basic-single"
                                          classNamePrefix="select"
                                          placeholder="Select your city"
                                          onChange={handleChange}
                                          required
                                      />
                                      {cityError && <span className="validation-error">{cityError}</span>}
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
                <img className="landing-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1611283411/iStock-1189756940_lcvprj.jpg" alt="dog lying down" />
            </div>

        </div>
           
            </div>
        )

    
}

export default AdvisorFormPage1;
