import $ from 'jquery'
import config from '../../app.config'
import constants from '../constants'


function receivedCurrentUser(user){
    return {
        type: constants.RECEIVED_CURRENT_USER,
        payload: {user:user}
    }
}




/*
 ** THUNK ACTION
 */

export function getCurrentUser(){
    return (dispatch) => {
        return $.ajax({
            method: 'GET',
            url: config.api.main.host + '/users/current',
            success: (user) => {
                dispatch(receivedCurrentUser(user));
            }
        });
    }
}