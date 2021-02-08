import React from 'react';
import Select from 'react-select';
import { withRouter } from "react-router";
import UserApiService from '../../../../../services/user-api-service'
import DogApiService from '../../../../../services/dog-api-service'
import * as dayjs from 'dayjs'

class DogFormPageThree extends React.Component {
    state = {

        progress: '10',
        dog_name: '',
        email: '',
        user_id: '',
        body_position: '',
        dog_profile: '',
        bodyPositionError: ''


      
            
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        
        const dogId = localStorage.getItem('dogId')

        this.setState({
            current_dog: dogId,
            progress: 50
        },

            () => DogApiService.getDogById(this.state.current_dog)
                .then(res => {
                    this.setState({
                        dog_profile: res
                    })
                }))






    }

    categorizeDog = () => {
        // Check the day
        const { dog_profile, body_position } = this.state;

        const today = dayjs();
        const birthday = dayjs(this.state.dog_profile.birthday)
        const age = today.diff(birthday, 'month')

        let multiplier;

        if (age <= 4) {
            multiplier = 3;
        }

        if (age > 4 && age <= 12) {
            multiplier = 2
        }

        if (age > 12 && body_position === 'underweight' && dog_profile.neutered === true) {
            multiplier = 1.6
        }

        if (age > 12 && body_position === 'ideal-weight' && dog_profile.neutered === true) {
            multiplier = 1.5
        }

        if (age > 12 && body_position === 'overweight' && dog_profile.neutered === true) {
            multiplier = 1.0
        }

        if (age > 12 && body_position === 'underweight' && dog_profile.neutered === false) {
            multiplier = 1.8
        }

        if (age > 12 && body_position === 'ideal-weight' && dog_profile.neutered === false) {
            multiplier = 1.6
        }

        if (age > 12 && body_position === 'overweight' && dog_profile.neutered === false) {
            multiplier = 1.2
        }

        return multiplier
    }



    handleBodyPosition = (e) => {
        this.setState({
            body_position: e.target.value
        })
    }


    handleValidation = () => {
        let formIsValid = true;

        if (!this.state.body_position) {
            formIsValid = false;
            this.setState({
                bodyPositionError: 'Please select an option'
            })
        }




        return formIsValid
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.handleValidation()) {

            const { history } = this.props;

            // calculate multiple
            const { body_position } = this.state;

            const multiplier = this.categorizeDog()
            const calorie_requirement = this.state.dog_profile.rer * multiplier

            // Patch results


            const updatedDog = {
                body_position: this.state.body_position,
                rer_multiple: multiplier,
                calorie_requirement: calorie_requirement
            }

            // patch dog profile
            DogApiService.updateDog(updatedDog, this.state.current_dog)
                .then(res => {
                    history.push('/foodadvisor/form/issues')
                })


        }

        else {
            alert('Please select an option')
        }
    }

    render() {
        const multiplier = this.categorizeDog()

        const calorie_requirement = this.state.dog_profile.rer * multiplier


        const today = dayjs();
        const birthday = dayjs(this.state.dog_profile.birthday)
        const age = today.diff(birthday, 'month')

        console.log(this.state)

        const { match, location, history } = this.props;
        const { start_form_open, form_page_one, form_page_two, form_page_three, form_page_four } = this.state;

        const options = [
            { value: 'golden-retriever', label: 'Golden Retriever' },
            { value: 'bulldog', label: 'Bulldog' },

        ]




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
                                                <label className={this.state.body_position === "underweight" ? "test-label checked-option" : "test-label"} htmlFor="underweight">
                                                    <div className="body-position-icon-box">
                                                        <img className="body-position-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1607484912/Screen_Shot_2020-12-08_at_10.34.05_PM_rsr1pu.png" />
                                                    </div>

                                                    <p className="body-position-title">Underweight</p>
                                                    <p>Ribs very visible</p>
                                                </label>
                                                <label className={this.state.body_position === "ideal-weight" ? "test-label checked-option" : "test-label"} htmlFor="ideal-weight">
                                                    <div className="body-position-icon-box">
                                                        <img className="body-position-image" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1607484912/Screen_Shot_2020-12-08_at_10.33.31_PM_rc8aii.png" />
                                                    </div>

                                                    <p className="body-position-title">Ideal Weight</p>
                                                    <p>Ribs very visible</p>
                                                </label>
                                                <label className={this.state.body_position === "overweight" ? "test-label checked-option" : "test-label"} htmlFor="overweight">
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
                                                    onChange={this.handleBodyPosition}
                                                    checked={this.state.body_position === "underweight" ? true : false} />

                                                <input
                                                    type="radio"
                                                    className="form-radio"
                                                    name="ideal-weight"
                                                    id="ideal-weight"
                                                    value="ideal-weight"
                                                    onChange={this.handleBodyPosition}
                                                    checked={this.state.body_position === "ideal-weight" ? true : false} />

                                                <input
                                                    type="radio"
                                                    className="form-radio"
                                                    name="overweight"
                                                    value="overweight"
                                                    id="overweight"
                                                    onChange={this.handleBodyPosition}
                                                    checked={this.state.body_position === "overweight" ? true : false} />
                                            </div>

                              

                                        </div>

                                       
                                            <button className="landing-button"
                                                onClick={this.handleSubmit}>
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
}

export default withRouter(DogFormPageThree);
