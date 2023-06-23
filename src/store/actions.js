import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';

const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}/pitches/`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};
