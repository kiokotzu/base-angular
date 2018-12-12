export interface UserState {
  user: object;
}

export type GlobalState = Readonly<{
  user: UserState
}>;


export const INITIAL_MODELS_STATE: GlobalState = {
  user: null
};
