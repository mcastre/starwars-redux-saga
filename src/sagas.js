import { takeLatest } from 'redux-saga/effects';
import { fetchPerson } from './StarWarsActions';

function* mySaga() {
  console.log('calling mySaga');
  // Listens to redux store for a dispatch with the matching type
  // If found, it will call the passed in generator function
  // If there exists another call of the same type when this is called,
  // it will cancel out the first call, and re-run the latest generator function call.
  yield takeLatest('FETCH_STAR_WARS_REQUEST', fetchPerson);
}

export default mySaga;