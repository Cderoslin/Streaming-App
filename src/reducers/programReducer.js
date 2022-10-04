import {
  PROGRAM_REQUEST,
  PROGRAM_SUCCESS,
  PROGRAM_FAIL,
} from '../actions/types';

export const programReducer = (
  state = { programs: [], loading: false },
  action
) => {
  switch (action.type) {
    case PROGRAM_REQUEST:
      return { loading: true, programs: [] };
    case PROGRAM_SUCCESS:
      return { loading: false, programs: action.payload };
    case PROGRAM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
