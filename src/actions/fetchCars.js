export const fetchCars = (cars) => {
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/listings", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": '*'
            },
        })
        .then(response => response.json())
        .then(cars => dispatch({
            type: "FETCH_CARS",
            payload: cars.data
        }))
    }
}