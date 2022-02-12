import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/currentUser'
import { updateSignupForm } from "../actions/currentUser"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    
    const formHandler = (e) => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        signup(signupFormData, history)
    }


    return (

        <div class="signup-form row">
            <h3 className="display-4">Become a member!</h3>
            <p>
            </p>

            <form onSubmit={handleSubmit}>
                <div class="col-md-5 mx-auto mb-4">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input value={signupFormData.name} name="name" type="text" class="form-control" onChange={formHandler} />
                </div>

                <div class="col-md-5 mx-auto mb-4">
                    <label class="form-label">Email address</label>
                    <input value={signupFormData.email} name="email" type="text" class="form-control" onChange={formHandler} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="col-md-5 mx-auto mb-4">
                    <label for="exampleLocation1" class="form-label">Location</label>
                    <input value={signupFormData.location} name="location" type="text" class="form-control" onChange={formHandler} />
                </div>

                <div class="col-md-5 mx-auto mb-4">
                    <label class="form-label">Birthday</label>
                    <input value={signupFormData.birthday} name="birthday" type="text" class="form-control" onChange={formHandler} />
                    <div id="birthdayHelp" class="form-text">Birthday Format: 00/00/0000</div>
                </div>

                <div class="col-md-5 mx-auto mb-4">
                    <label class="form-label">Password</label>
                    <input value={signupFormData.password} name="password" type="password" class="form-control" onChange={formHandler}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);