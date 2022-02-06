import React from 'react';
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../utils/refreshToken'

const clientId = '112746534063-fnqemj6q81k341c94p0gnmmqp4ke4nfc'

const Login = () => {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj)
        
        //initializing the setup
        refreshTokenSetup(res)
    }

    const onFailure = (res) => {
        console.log('[Login failed]: res:', res)
    }

    return (
        <div>
            Login Page
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />

        </div>
    )
} 


export default Login