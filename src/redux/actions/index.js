import axios from "axios"
import { GET_WEATHER_FAIL, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "../constants"

export const weatherAction = (city = "Kathmandu") => async (dispatch) => {
    try{
        dispatch({type: GET_WEATHER_REQUEST});
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d2de98e089f1c28e1a22fc19a24ef04&units=metric`);
        dispatch({type: GET_WEATHER_SUCCESS, payload: data})
    } catch (err) {
        dispatch({
            type: GET_WEATHER_FAIL,
            payload: err.data && err.response.data.message ? err.response.data.message : err.message
        })
    }
}