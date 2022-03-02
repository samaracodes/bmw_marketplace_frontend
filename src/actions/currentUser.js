
export const updateSignupForm = (formData) => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }
  
export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
}

export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM", 
       formData
    }

}

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }

}

export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
// returns a function, within the function we return a promise
export const getCurrentUser = (data) => {
    return (dispatch) => { 
        return fetch("https://bmwmrkt-api.herokuapp.com/api/v1/get_current_user", { 
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            method: "GET",
            body: JSON.stringify(data)
        })
        .then (response => response.json())
        .then(user => {
            if (user.error) {
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log())
    }
}

export const signup = (credentials, history) => {
    return (dispatch) => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://bmwmrkt-api.herokuapp.com/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(response => response.json())
        .then(user => {
          if (user.error) {
            console.log(user.error)
          } else {
            dispatch(setCurrentUser(user))
            dispatch({type: "RESET_SIGNUP_FORM", payload: user})
            history.push('/')
            console.log("Creating a new profile as: " + user.user.name + " -- " + user.user.email)
          }
        })
        .catch(console.log)
    }
}

export const login = (info, history) => {
    return (dispatch) => { 
        return fetch("http://bmwmrkt-api.herokuapp.com/api/v1/login", {
            credentials: "include",
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then (response => response.json())
        .then(user => {
            if (user.error) {
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user))
                dispatch({type: "RESET_LOGIN_FORM"})
                history.push('/')
                console.log("Logging in as: " + user.data.attributes.name + " -- " + user.data.attributes.email)
                
            }
        })
        .catch(console.log())
    }
}

export const logout = (event) => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        return fetch('http://bmwmrkt-api.herokuapp.com/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        }),
        console.log("Logout made successfully ✌🏼")
    }
}
