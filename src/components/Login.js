import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/currentUser';
import { login } from '../actions/currentUser';
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../utils/refreshToken'

// const clientId = '112746534063-fnqemj6q81k341c94p0gnmmqp4ke4nfc'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const formHandler = (e) => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        login(loginFormData, history)
    }
    
    // const onSuccess = (res) => {
    //     console.log('[Login Success] currentUser:', res.profileObj)
        
    //     //initializing the setup
    //     refreshTokenSetup(res)
    // }

    // const onFailure = (res) => {
    //     console.log('[Login failed]: res:', res)
    // }


    return (
        <div class="signup-form row">
            <h3 className="display-4">Become a member!</h3>
            <p>
            </p>

            <form onSubmit={handleSubmit}>
                <div class="col-md-5 mx-auto mb-4">
                    <label class="form-label">Email address</label>
                    <input value={loginFormData.email} name="email" type="text" class="form-control" onChange={formHandler} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="col-md-5 mx-auto mb-4">
                    <label class="form-label">Password</label>
                    <input value={loginFormData.password} name="password" type="password" class="form-control" onChange={formHandler}/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    
            {/* <GoogleLogin 
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            /> */}
        </div>
    )
} 

const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)