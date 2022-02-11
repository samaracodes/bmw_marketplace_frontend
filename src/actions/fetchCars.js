export function fetchCars() {
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/listings")
        .then(response => response.json())
        .then(cars => dispatch({type: "FETCH_CARS", payload: cars }))
    }
}