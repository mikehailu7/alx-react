//Author: Mikias Hailu
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes"
export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
}
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));
