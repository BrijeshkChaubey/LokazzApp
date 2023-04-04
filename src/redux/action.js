import {TOTAL_AMOUNT} from './actionType';

export const TotalAmount = data => {
  return {
    type: TOTAL_AMOUNT,
    payload: data,
  };
};
