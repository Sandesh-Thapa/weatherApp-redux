import { combineReducers } from "redux";
import { GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "../constants";

const weatherReducer = (state = {weather: {}}, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {loading: true, weather: {}};
        case GET_WEATHER_SUCCESS:
            return {loading: false, weather: action.payload}
        case GET_WEATHER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export default combineReducers({
    weather: weatherReducer
})