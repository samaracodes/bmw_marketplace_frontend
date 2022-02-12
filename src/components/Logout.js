import React from 'react'
import { connect } from 'react-redux'
import { GoogleLogout } from 'react-google-login'
import { logout } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'


// const clientId = '112746534063-fnqemj6q81k341c94p0gnmmqp4ke4nfc'

const Logout = ({ logout, history }) => {
    // const onSuccess = () => {
    //     console.log('Logout made successfully ✌🏼')
    // }

    return (
        <div>

            <form onSubmit={(e) => {
                    e.preventDefault()
                    logout()
                    history.push('/')
                }}>
                <input type="submit" value="Log Out" className="btn btn-primary" />
            </form>
            

            {/* <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                onLogout
            /> */}
            
        </div>
    )
}

export default withRouter(connect(null, { logout })(Logout))