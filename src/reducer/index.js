import { combineReducers } from 'redux';
import UserInfo from './UserInfo';
import Slot from './Slot';
import Location from './Location';
import Booking from './Booking'
import SnapPoint from './SnapPoint'
export default combineReducers({
  Location,
  UserInfo,
  Slot,
  Booking,
  SnapPoint
});

