import { combineReducers } from '@ngrx/store';

import { userReducer as user } from '@store/reducers/global/user/user.reducer';

export const global = combineReducers({
  user
});
