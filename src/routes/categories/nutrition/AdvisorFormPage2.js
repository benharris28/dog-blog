// import React from 'react';
// import Select from 'react-select';
// import { withRouter } from "react-router";
// import UserApiService from '../../../services/user-api-service'
// import DogApiService from '../../../services/dog-api-service'
// import * as dayjs from 'dayjs'

// const DogFormPageTwo = () => {
    

//     const [state, setState] = useState({
//         progress: '10',
//         dog_name: '',
//         dog_breed: '',
//         dog_year: '',
//         dog_month: '',
//         dog_weight: '',
//         current_dog: '',
//         yearValue: '',
//         monthValue: "0",
//         neutered: '',
//         breedError: '',
//         yearError: '',
//         monthError: '',
//         weightError: '',
//         neuterError: ''
//     })



//     useEffect(() => {
//         // Update the document title using the browser API
//         window.scrollTo(0, 0);
//       });

//     componentDidMount = () => {
//         window.scrollTo(0, 0);
        
//         const dogId = localStorage.getItem('dogId')

//         this.setState({
//             current_dog: dogId,
//             progress: 50
//         })
//     }


//     handleBreedChange = (breed) => {
//         this.setState({
//             dog_breed: breed
//         })
//     }

//     handleNeutered = (neutered) => {
//         this.setState({
//             neutered: neutered
//         })
//     }

//     handleCity = (city) => {
//         this.setState({
//             city: city,
//             cityValue: city[0].value
//         })
//     }

//     handleYearChange = (year) => {
//         this.setState({
//             dog_year: year,
//             yearValue: year.value

//         })
//     }

//     handleMonthChange = (month) => {
//         this.setState({
//             dog_month: month,
//             monthValue: month.value

//         })
//     }

//     handleDogWeight = (weight) => {
//         this.setState({
//             dog_weight: weight
//         })
//     }


//     handleValidation = () => {
//         let formIsValid = true;

//         if (!this.state.dog_breed) {
//             formIsValid = false;
//             this.setState({
//                 breedError: 'Please select a breed'
//             })
//         }

//         if (!this.state.yearValue) {
//             formIsValid = false;

//             this.setState({
//                 yearError: 'Please select a year'
//             })
//         }



//         if (!this.state.monthValue) {
//             formIsValid = false;
//             this.setState({
//                 monthError: 'Cannot be empty'
//             })
//         }

//         if (!this.state.dog_weight) {
//             formIsValid = false;
//             this.setState({
//                 weightError: 'Please enter a weight'
//             })
//         }

//         if (!this.state.neutered.value) {
//             formIsValid = false;
//             this.setState({
//                 neuterError: 'Please select an option'
//             })
//         }

//         return formIsValid
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()

//         if (this.handleValidation()) {

//             const { history } = this.props;

//             const today = dayjs();
//             const birthday = dayjs(today).subtract(`${this.state.yearValue}`, 'years').subtract(`${this.state.monthValue}`, 'months').format('YYYY-MM-D')

//             // Calculate RER and patch

//             const weightKG = this.state.dog_weight / 2.205
//             const rer = 70 * ((weightKG) ** (3 / 4))

//             const updatedDog = {
//                 id: this.state.current_dog,
//                 breed: this.state.dog_breed.value,
//                 birthday: birthday,
//                 weight: this.state.dog_weight,
//                 rer: rer,
//                 neutered: this.state.neutered.value
//             }

//             // patch dog profile
//             DogApiService.updateDog(updatedDog, this.state.current_dog)
//                 .then(res => {
//                     history.push('/foodadvisor/form/body-position')
//                 })

//         }

        

//     }

   


//         console.log(this.state)
//         const today = dayjs();
//         const birthday = dayjs(today).subtract(`${this.state.yearValue}`, 'years').subtract(`${this.state.monthValue}`, 'months').format('YYYY-MM-D')
//         console.log(birthday)


//         const options = [
//             { value: 'golden-retriever', label: 'Golden Retriever' },
//             { value: 'bulldog', label: 'Bulldog' },

//         ]

//         const yearOptions = [
//             { value: '0', label: '0' },
//             { value: '1', label: '1' },
//             { value: '2', label: '2' },
//             { value: '3', label: '3' },
//             { value: '4', label: '4' },
//             { value: '5', label: '5' },
//             { value: '6', label: '6' },
//             { value: '7', label: '7' },
//             { value: '8', label: '8' },
//             { value: '9', label: '9' },
//             { value: '10', label: '10' },
//             { value: '11', label: '11' },
//             { value: '12', label: '12' },
//         ]

//         const monthOptions = [
//             { value: '0', label: '0' },
//             { value: '1', label: '1' },
//             { value: '2', label: '2' },
//             { value: '3', label: '3' },
//             { value: '4', label: '4' },
//             { value: '5', label: '5' },
//             { value: '6', label: '6' },
//             { value: '7', label: '7' },
//             { value: '8', label: '8' },
//             { value: '9', label: '9' },
//             { value: '10', label: '10' },
//             { value: '11', label: '11' },
//             { value: '12', label: '12' },
//         ]

//         const neuteredOptions = [
//             { value: 'true', label: 'Neutered' },
//             { value: 'false', label: 'Not neutered' },

//         ]




//         return (
//             <div>
//                 <div className="landing-flex-container full">
//                     <div className="landing-container">
//                         <div style={{ margin: "auto" }} className="step-header">
//                             <p className="step-heading">Step 2 of 6</p>
//                         </div>
//                         <h2 className="section-heading">Let's customize for age and breed</h2>
                       

                     

//                         <div className="food-form-container">

// <div>
//     <div className="form-container">
//         <form className="food-form">





//             <div className="form-page-two">

//                 <div className="question-box">
//                     <p className="question-title">What is your dog's breed?</p>
//                     <Select
//                         defaultValue={[options[0]]}
//                         value={this.state.dog_breed}
                      
//                         name="dog-breed"
//                         options={options}
//                         className="basic-single"
//                         classNamePrefix="select"
//                         placeholder="Type to search..."
//                         onChange={this.handleBreedChange}
//                     />
//                     {this.state.breedError && <span className="validation-error">{this.state.breedError}</span>}
//                 </div>

//                 <div className="question-box">
//                     <p className="question-title">What is your dog's age?</p>
//                     <div className="flex-container">

//                         <Select

//                             className="age-input"
//                             options={yearOptions}
//                             value={this.state.dog_year}
//                             onChange={this.handleYearChange}
//                             placeholder="0"
//                         />

//                         <label className="age-input-label">years</label>

//                         <Select
//                         defaultValue={[monthOptions[0]]}
//                             className="age-input"
//                             options={monthOptions}
//                             value={this.state.dog_month}
//                             onChange={this.handleMonthChange}
//                             placeholder="0"
//                         />

//                         <label className="age-input-label">months</label>


//                     </div>
//                     {this.state.yearError && <span className="validation-error">{this.state.yearError}</span>}
//                     {this.state.monthError && <span className="validation-error">{this.state.monthError}</span>}
//                 </div>


//                 <div className="question-box">
//                     <p className="question-title">What is your dog's weight?</p>
//                     <input
//                         type="number"
//                         name="dog-weight"
//                         onChange={(e) => this.handleDogWeight(e.target.value)}
//                         value={this.state.dog_weight}
//                         placeholder="Weight in lbs"
//                     >

//                     </input>
//                     {this.state.weightError && <span className="validation-error">{this.state.weightError}</span>}
//                 </div>

//                 <div className="question-box">
//                     <p className="question-title">Is your dog neutered?</p>


//                     <Select

//                         defaultValue={neuteredOptions[0]}
//                         value={this.state.neutered}

//                         name="neutered"
//                         options={neuteredOptions}
//                         className="basic-single"
//                         classNamePrefix="select"
//                         placeholder="Is your dog neutered?"
//                         onChange={this.handleNeutered}
//                     />






//                     {this.state.neuterError && <span className="validation-error">{this.state.neuterError}</span>}
//                 </div>

              
//                     <button className="landing-button"
//                         onClick={this.handleSubmit}>
//                         Next
//             </button>
             

//             </div>




//         </form>
//     </div>
// </div>

// </div>

//                     </div>
//                     <div className="landing-container">
//                         <img className="landing-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1611283410/iStock-1207312370_izcmcf.jpg" alt="dog looking at camera" />
//                     </div>

//                 </div>
            
//             </div>
//         )

    
// }

// export default withRouter(DogFormPageTwo);
