import axios from 'axios';
import { toast } from 'react-toastify';

export const GET_PLANET_RESULT = 'get_planet_result';
export const GET_PLANET_RESULT_SUCCESS = 'get_planet_result_success';
export const GET_PLANET_RESULT_ERROR = 'get_planet_result_error';
export const GET_VEHICLE_RESULT = 'get_vehicle_result';
export const GET_VEHICLE_RESULT_SUCCESS = 'get_vehicle_result_success';
export const GET_VEHICLE_RESULT_ERROR = 'get_vehicle_result_error';
export const GET_TOKEN_RESULT = 'get_token_result';
export const GET_TOKEN_RESULT_ERROR = 'get_token_result_error';
export const GET_TOKEN_RESULT_SUCCESS = 'get_token_result_success';
export const GET_FELCON_RESULT='get_felcon_result';
export const GET_FELCON_RESULT_ERROR='get_felcon_result_error';
export const GET_FELCON_RESULT_SUCCESS='get_felcon_result_success';

axios.interceptors.request.use((config) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type']='application/json'
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
)
export const getPlanets = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PLANET_RESULT
        })
        axios.get(`https://findfalcone.herokuapp.com/planets`).then((response) => {
            dispatch({
                type: GET_PLANET_RESULT_SUCCESS,
                payload: response.data
            })

        }).catch((error) => {
            dispatch({
                type: GET_PLANET_RESULT_ERROR,
                payload: error
            })
        })
    }
}

export const getVehicles = () => {
    return (dispatch) => {
        dispatch({
            type: GET_VEHICLE_RESULT
        })
        axios.get(`https://findfalcone.herokuapp.com/vehicles`).then((response) => {
            dispatch({
                type: GET_VEHICLE_RESULT_SUCCESS,
                payload: response.data
            })

        }).catch((error) => {
            dispatch({
                type: GET_VEHICLE_RESULT_ERROR,
                payload: error
            })
        })
    }
}

export const getToken = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TOKEN_RESULT
        })
        axios.post(`https://findfalcone.herokuapp.com/token`).then((response) => {
            dispatch({
                type: GET_TOKEN_RESULT_SUCCESS,
                payload: response.data.token
            })

        }).catch((error) => {
            dispatch({
                type: GET_TOKEN_RESULT_ERROR,
                payload: error
            })
        })
    }
}

export const findFelcon = (value) => {
    return (dispatch) => {
        dispatch({
            type: GET_FELCON_RESULT
        })
        axios.post(`https://findfalcone.herokuapp.com/find`,value).then((response) => {
        console.log(response.data.status);
        if(response.data.status === "success"){
            toast.success("Planet found is "+response.data.planet_name);
        }
        else{
            toast.error("Planet not found");

        }
        dispatch({
                type: GET_FELCON_RESULT_SUCCESS,
                payload: response.data
            })

        }).catch((error) => {
            console.log("error",error);
            toast.error(error.response.data.error);
            dispatch({
                type: GET_FELCON_RESULT_ERROR,
                payload: error.response.data.error
            })
        })
    }
}