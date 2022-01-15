import { WinnersAction, WinnersState, WinnersActionEnum } from "./types";

const initialState: WinnersState = {
  olympic: [],
  error: "",
  isLoading: false,
};

export default function accountReducer(
  state = initialState,
  action: WinnersAction
): WinnersState {
  switch (action.type) {
    case WinnersActionEnum.SET_WINNERS:
      return { ...state, olympic: action.payload };
    case WinnersActionEnum.SET_WINNERS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case WinnersActionEnum.SET_WINNERS_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
