import { AppDispatch } from "../../index";

import { IOlympic } from "../../../interfaces/winners.interface";
import {
  SetErrorAction,
  SetIsLoadingAction,
  SetWinnersAction,
  WinnersActionEnum,
} from "./types";

import axios from "axios";

// import { API } from '../../../helpers/api';

export const WinnersActionCreators = {
  setWinners: (products: IOlympic[]): SetWinnersAction => ({
    type: WinnersActionEnum.SET_WINNERS,
    payload: products,
  }),
  setWinnersIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: WinnersActionEnum.SET_WINNERS_IS_LOADING,
    payload,
  }),
  setWinnersError: (payload: string): SetErrorAction => ({
    type: WinnersActionEnum.SET_WINNERS_ERROR,
    payload,
  }),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetchWinners: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(WinnersActionCreators.setWinnersIsLoading(true));

      const response = await axios.get(
        "https://www.ag-grid.com/example-assets/olympic-winners.json"
      );

      dispatch(WinnersActionCreators.setWinners(response.data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      dispatch(
        WinnersActionCreators.setWinnersError(e.response?.data?.message)
      );
    } finally {
      setTimeout(() => {
        dispatch(WinnersActionCreators.setWinnersIsLoading(false));
      }, 1000);
    }
  },
};
