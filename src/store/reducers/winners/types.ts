import { IOlympic } from "../../../interfaces/winners.interface";

export interface WinnersState {
  olympic: IOlympic[];
  isLoading: boolean;
  error: string;
}

export enum WinnersActionEnum {
  SET_WINNERS = "SET_WINNERS",
  SET_WINNERS_ERROR = "SET_WINNERS_ERROR",
  SET_WINNERS_IS_LOADING = "SET_WINNERS_IS_LOADING",
}

export interface SetWinnersAction {
  type: WinnersActionEnum.SET_WINNERS;
  payload: IOlympic[];
}
export interface SetErrorAction {
  type: WinnersActionEnum.SET_WINNERS_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: WinnersActionEnum.SET_WINNERS_IS_LOADING;
  payload: boolean;
}

export type WinnersAction =
  | SetWinnersAction
  | SetErrorAction
  | SetIsLoadingAction;
