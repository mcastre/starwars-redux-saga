import { call, put } from 'redux-saga/effects';


const api = (url) => fetch(url).then(response => response.json());

export const fetchStarWarsRequest = {
  type: 'FETCH_STAR_WARS_REQUEST'
};

export function* fetchPerson(action) {
  try {
    const person = yield call(api, 'https://swapi.co/api/people');

    // yield waits til fetch promise resolves
    yield put({ type: 'FETCH_STAR_WARS_SUCCESS', data: person.results });
  } catch(e) {
    console.log('Error fetching from API: ', e);
  }
}