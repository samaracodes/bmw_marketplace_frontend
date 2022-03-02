const initialState = {
    name: "",
    email: "", 
    password: "",
    location: "",
    birthday: ""

}

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }

}