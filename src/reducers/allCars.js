export default (state = {cars: []}, action) => {
    switch(action.type) {
        case "FETCH_CARS":
            return {
                cars: action.payload
            }
        default:
            return state
    }
}