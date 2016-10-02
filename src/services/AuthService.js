import $ from 'jquery';
import AppState from '../AppState'

export function getCurrentUser(){
  $.ajax({
    method: 'GET',
    url: config.api.main.host + '/user/me',
    success: (user)=>{
      AppState.user = user
    }
  })
}
