import {TOTAL_AMOUNT} from './actionType';

const initialstate = {
  Total: 0,
  item: 0,
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOTAL_AMOUNT:
      if (action.payload.act === 'plus') {
        return {
          ...state,
          Total: state.Total + action.payload.amount,
          item: state.item + 1,
        };
      } else {
        return {
          ...state,
          Total: state.Total - action.payload.amount,
          item: state.item - 1,
        };
      }

    default:
      return state;
  }
};
