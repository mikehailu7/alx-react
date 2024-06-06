import { Map } from 'immutable';
import {LOGOUT,DISPLAY_NOTIFICATION_DRAWER,HIDE_NOTIFICATION_DRAWER,LOGIN_SUCCESS,LOGIN_FAILURE} from '../actions/uiActionTypes'
export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case LOGOUT:
      return state.set('isUserLoggedIn', false);

    default:
      break;
  }
  return state;
};

export default uiReducer;
