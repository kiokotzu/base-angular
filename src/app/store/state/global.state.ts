export interface UserState {
  user: string;
}

export type GlobalState = Readonly<{
  user: string
}>;


export const INITIAL_MODELS_STATE: GlobalState = {
  user: ''
};
