// eslint-disable-next-line
export default (state = {cars: []}, action) => {
    switch(action.type) {
        case "FETCH_CARS":
            return {
                cars: action.payload.data
            }
        default:
            return state
    }
}