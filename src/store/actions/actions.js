const axios = require('axios');

export const GET_COURSES = 'GET_COURSES';
export const SET_ERROR = 'SET_ERROR';

export function getCourses() {
  return dispatch => {
    dispatch({type: GET_COURSES});
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    axios.get(url).then(response => {
      const data = response.data;
      dispatch({type: GET_COURSES, payload: data});
    })
    .catch(error=> {
      dispatch({type: SET_ERROR, payload: error});
    });
  }
}
