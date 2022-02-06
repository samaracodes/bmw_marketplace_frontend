import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '112746534063-fnqemj6q81k341c94p0gnmmqp4ke4nfc'

const Logout = () => {
    const onSuccess = () => {
        console.log('Logout made successfully ✌🏼')
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                onLogout
            />
        </div>
    )
}

export default Logout