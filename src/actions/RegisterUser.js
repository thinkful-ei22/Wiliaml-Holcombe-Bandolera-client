
import {SubmissionError} from 'redux-form';

import  { API_BASE_URL } from '../../src/config';
//import {normalizeResponseErrors} from '../OTHER/utils';


export const registerUser = user => dispatch => {
  //console.log(user);
  //console.log(API_BASE_URL);
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          // new SubmissionError({
          //   [location]: message

          //})
          console.log(message)
         // console.log(err)
        );
      }
    });
};

function normalizeResponseErrors(res) {
    if (!res.ok) {
      if (
        res.headers.has('content-type') &&
                res.headers.get('content-type').startsWith('application/json')
      ) {
        // It's a nice JSON error returned by us, so decode it
        return res.json().then(err => Promise.reject(err));
      }
      // It's a less informative error returned by express
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res;
  };
 