import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import DogApiService from '../../../services/dog-api-service'
import * as dayjs from 'dayjs'

const AdvisorFormPage4 = () => {


    const history = useHistory();

    const [{ dog, progress }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        dog_name: '',
        city: '',
        cityValue: '',
        person_name: '',
        email: '',
        user_id: '',
        dog_breed: '',
        dog_year: '',
        dog_month: '',
        dog_weight: '',
        body_position: '',
        food_allergies: {label: "food allergies", value: false},
        environment_allergies: {label: "environment allergies", value: false},
        chews_paws: {label: "chewing paws", value: false},
        skin: {label: "skin issues", value: false},
        joint_pain: {label: "joint pain", value: false},
        anxiety: {label: "anxiety", value: false},
        grain_sensitive: {label: "grain sensitive", value: false},
        diarrhea: {label: "diarrhea", value: false},
        gas: {label: "passing gas", value: false},
        chicken_allergy: {label: "chicken allergy", value: false, attribute: '22'},
        beef_allergy: {label: "beef allergy", value: false, attribute: '21'},
        pork_allergy: {label: "pork allergy", value: false, attribute: '23'},
        current_dog: '',
        dog_profile: ''
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



    

    const handleIssues = (event) => {
        const item = event.target.name
        const stateName = event.target.id
        const updatedCheck = !!event.target.checked
        setState({ 
            ...state,
            [stateName]: {"label": item, "value": updatedCheck }});
    }


   // Want to move this function to a separate file to clean up
   // Not sure how to access context properly
    const createAttributes = () => {
      
        
        const canada_cities = [1,5]
        const us_cities = [2,3,4]

        let attributes = []
        

        // Lifestage
        const today = dayjs();
        const birthday = dayjs(dog.birthday)
        const age = today.diff(birthday,'month')


        if (age <= 12) {
            attributes.push(1)
        } 

        if (age > 12 && age <= 120) {
            attributes.push(2)
        }

        if (age > 120) {
            attributes.push(3)
        }

        

        
        // BreedSize


        // Weight

        if (dog.body_position === "underweight") {
            attributes.push(7)
        }

        if (dog.body_position === "ideal-weight") {
            attributes.push(8)
        }

        if (dog.body_position === "overweight") {
            attributes.push(9)
        }


        // Issues

        if (dog) {
            attributes.push(13)
        }

        if (state.environment_allergies.value === true) {
            attributes.push(14)
        }

        if (state.joint_pain.value === true) {
            attributes.push(15)
        }

        if (state.skin.value === true) {
            attributes.push(17)
        }

        if (state.grain_sensitive.value === true) {
            attributes.push(18)
        }

        if (state.value === true) {
            attributes.push(19)
        }

        if (state.diarrhea.value === true) {
            attributes.push(20)
        }

        if (state.beef_allergy.value === true) {
            attributes.push(21)
        }

        if (state.chicken_allergy.value === true) {
            attributes.push(22)
        }

        

        if (state.pork_allergy.value === true) {
            attributes.push(23)
        }


        if (state.chews_paws.value === true) {
            attributes.push(25)
        }

        

       

       

        

        

        if (state.anxiety.value === true) {
            attributes.push(27)
        }

        if (us_cities.includes(dog.city)) {
            attributes.push(28)
        }

        if (canada_cities.includes(dog.city)) {
            attributes.push(29)
        }

        
      


        return attributes
        
    }

    const attributeTest = createAttributes()
    console.log(attributeTest)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Display loading screen (need help with a setTimeout implementation)

     

        // create attributes

        const attributes = createAttributes()
  
        const issueList =  mapIssues()
        
        console.log(issueList)
        
        const updatedDog = {
            attributes: attributes,
           issues: issueList
        }
  
        // patch dog profile
        DogApiService.updateDog(updatedDog, dog.id)
          .then(res => {
             history.push('/foodadvisor/results')
          })
  
        // Forward to results



          
      }

      const mapIssues = () => {
        let issueList = []
        
        // Pulls in issue objects into one array, loops through them to check if the values are true
        // Push true values to issues Array
        const issueArray = [
            state.environment_allergies, 
            state.chews_paws, 
            state.skin,
            state.anxiety,
            state.joint_pain,
            state.chicken_allergy,
            state.beef_allergy,
            state.pork_allergy,
            state.pork_allergy,
            state.diarrhea,
            state.grain_sensitive,
          

        ]

        for (let i = 0; i < issueArray.length; i++) {
            if (issueArray[i].value === true) {
                issueList.push(issueArray[i].label)
            }
        }

    
    
        return issueList
      }

 
      

   
        

  

      
    


        return (
            <div className="landing-flex-container">
                <div className="landing-container">
                <div style={{ margin: "auto" }} className="step-header">
                            <p className="step-heading">Step 4 of 6</p>
                        </div>
                        <h2 className="section-heading">We'll only select foods that {dog.name} will thrive on</h2>
                        <p className="section-subheading">Are there any issues that {dog.name} is struggling with?</p>
                        <p>Select any that apply</p>

            <div className="food-form-container" style={{marginTop: 20}}>
              
                <div>
                    <div className="form-container">
                        <form className="food-form">

                                <div className="issue-box">
                                <label htmlFor="environment_allergies">
                                    <div className={state.environment_allergies.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Environment Allergies
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="chews_paws">
                                    <div className={state.chews_paws.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Chews Paws
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="skin">
                                    <div className={state.skin.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Dry Skin and Coat
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="joint_pain">
                                    <div className={state.joint_pain.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Joint Pain
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="anxiety">
                                    <div className={state.anxiety.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Anxiety
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="diarrhea">
                                    <div className={state.diarrhea.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                                Diarrhea
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="gas">
                                    <div className={state.gas.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                               Passes Gas
                                            
                                    </div>
                                    </label>


                                    <label htmlFor="chicken_allergy">
                                    <div className={state.chicken_allergy.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                               Chicken Allergy
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="beef_allergy">
                                    <div className={state.beef_allergy.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                               Beef Allergy
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="pork_allergy">
                                    <div className={state.pork_allergy.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                               Pork Allergy
                                            
                                    </div>
                                    </label>

                                    <label htmlFor="grain_sensitive">
                                    <div className={state.grain_sensitive.value === true? "issue-button checked-issue" : "issue-button"}>
                                    
                                               Grain Sensitive
                                            
                                    </div>
                                    </label>
                                </div>

                            
                           

                           

                    
                                <div className="form-page-four">
                                    <div className="dog-name">
                                    
                                        <div className="no-show">
                                     
                                       
                                        <div 
                                            className="checkbox-button"
                                           
                                            >
                                            
                                            <label htmlFor="environment-allergies">
                                                <input
                                                    type="checkbox"
                                                    name="environment allergies"
                                                    id="environment_allergies"
                                                    checked={state.environment_allergies.value}
                                                    id="environment_allergies"
                                                    onChange={handleIssues}
                                                    onClick={handleIssues}
                                                />
                                                <span className="checkbox-label">Environmental Allergies</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="chews-paws">
                                                <input
                                                    type="checkbox"
                                                    name="chewing paws"
                                                    id="chews_paws"
                                                    checked={state.chews_paws.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Chews Paws</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="skin">
                                                <input
                                                    type="checkbox"
                                                    name="dry skin"
                                                    id="skin"
                                                    checked={state.skin.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Dry skin and coat</span>
                                            </label>
                                        </div>
                                    
                                        <div className="checkbox-button">
                                            <label htmlFor="joint_pain">
                                                <input
                                                    type="checkbox"
                                                    name="joint pain"
                                                    id="joint_pain"
                                                    checked={state.joint_pain.value}
                                                
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Joint pain</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="anxiety">
                                                <input
                                                    type="checkbox"
                                                    name="anxiety"
                                                    id="anxiety"
                                                    checked={state.anxiety.value}
                                                    onChange={handleIssues}

                                                />
                                                <span className="checkbox-label">Anxiety</span>
                                            </label>
                                        </div>
                                  
                                        <div className="checkbox-button">
                                            <label htmlFor="diarrhea">
                                                <input
                                                    type="checkbox"
                                                    name="diarrhea"
                                                    id="diarrhea"
                                                    checked={state.diarrhea.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Diarrhea</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="gas">
                                                <input
                                                    type="checkbox"
                                                    name="gas"
                                                    id="gas"
                                                    checked={state.gas.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Passes gas</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="chicken_allergy">
                                                <input
                                                    type="checkbox"
                                                    name="chicken allergy"
                                                    id="chicken_allergy"
                                                    checked={state.chicken_allergy.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Chicken Allergy</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="beef_allergy">
                                                <input
                                                    type="checkbox"
                                                    name="beef allergy"
                                                    id="beef_allergy"
                                                    checked={state.beef_allergy.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Beef Allergy</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="pork_allergy">
                                                <input
                                                    type="checkbox"
                                                    name="pork allergy"
                                                    id="pork_allergy"
                                                    checked={state.pork_allergy.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Pork Allergy</span>
                                            </label>
                                        </div>
                                        <div className="checkbox-button">
                                            <label htmlFor="grain_sensitive">
                                                <input
                                                    type="checkbox"
                                                    name="grain sensitive"
                                                    id="grain_sensitive"
                                                    checked={state.grain_sensitive.value}
                                                    onChange={handleIssues}
                                                />
                                                <span className="checkbox-label">Grain sensitivity</span>
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                               
                                        <button className="landing-button"
                                            onClick={handleSubmit}>
                                            Show Results
                                    </button>
                                   
                                </div>
                            

                            
                        </form>
                    </div>
                </div>

            </div>
            </div>
            <div className="landing-container">
                        <img className="landing-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" alt="dog smiling" />
                    </div>
            </div>
        )

    
}

export default AdvisorFormPage4;
