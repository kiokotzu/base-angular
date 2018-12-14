import * as fromUser from '@store/actions/global/user.action';

export function userReducer(state: string = '', action: fromUser.actions): string {
  switch (action.type) {
    case fromUser.LOAD_USER:
      return action.name;
    default:
      return state;
  }
}
