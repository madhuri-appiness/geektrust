
import {
    GET_PLANET_RESULT, GET_PLANET_RESULT_SUCCESS, GET_PLANET_RESULT_ERROR,
    GET_VEHICLE_RESULT, GET_VEHICLE_RESULT_ERROR, GET_VEHICLE_RESULT_SUCCESS,
    GET_TOKEN_RESULT, GET_TOKEN_RESULT_ERROR, GET_TOKEN_RESULT_SUCCESS,
    GET_FELCON_RESULT, GET_FELCON_RESULT_ERROR, GET_FELCON_RESULT_SUCCESS
} from './action';

var initialState = {
    planetResult: null,
    vehicleResult: null,
    token: null,
    felconResult: null,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PLANET_RESULT:
            return { ...state, isDataLoading: true, error: null }
            break;
        case GET_PLANET_RESULT_SUCCESS:
            return { ...state, isDataLoading: false, planetResult: action.payload }
            break;
        case GET_PLANET_RESULT_ERROR:
            return { ...state, isDataLoading: false, error: action.payload }
            break;
        case GET_VEHICLE_RESULT:
            return { ...state, isDataLoading: true, error: null }
            break;
        case GET_VEHICLE_RESULT_SUCCESS:
            return { ...state, isDataLoading: false, vehicleResult: action.payload }
            break;
        case GET_VEHICLE_RESULT_ERROR:
            return { ...state, isDataLoading: false, error: action.payload }
            break;
        case GET_TOKEN_RESULT:
            return { ...state, isDataLoading: true, error: null }
            break;
        case GET_TOKEN_RESULT_SUCCESS:
            return { ...state, isDataLoading: false, token: action.payload }
            break;
        case GET_TOKEN_RESULT_ERROR:
            return { ...state, isDataLoading: false, error: action.payload }
            break;
        case GET_FELCON_RESULT:
            return { ...state, isDataLoading: true, error: null }
            break;
        case GET_FELCON_RESULT_SUCCESS:
            return { ...state, isDataLoading: false, felconResult: action.payload }
            break;
        case GET_FELCON_RESULT_ERROR:
            return { ...state, isDataLoading: false, error: action.payload }
            break;
        default:
            return state;
    }
}