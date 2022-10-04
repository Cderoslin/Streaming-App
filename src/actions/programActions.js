import axios from 'axios';
import { PROGRAM_REQUEST, PROGRAM_SUCCESS, PROGRAM_FAIL } from './types';

export const fetchPrograms = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_REQUEST });

    const { data } = await axios.get('/feed/sample.json');

    dispatch({ type: PROGRAM_SUCCESS, payload: data.entries });
  } catch (error) {
    dispatch({ type: PROGRAM_FAIL, payload: error.response });
  }
};
