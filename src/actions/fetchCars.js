export function fetchCars() {
    return (dispatch) => {
        fetch("http://bmwmrkt-api.herokuapp.com/api/v1/listings")
        .then(response => response.json())
        .then(cars => dispatch({type: "FETCH_CARS", payload: cars }))
    }
}