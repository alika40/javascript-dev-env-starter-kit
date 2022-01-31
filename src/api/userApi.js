import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//  Get all users
export const getUsers = () => {
  return get('users');
}



const get = (url) => {
  return fetch(baseUrl + url).then(onSuccess, onError);

}


// Delete a user
export const deleteUser = (id) => {
  return del(`users/${id}`);
}


const del = (url) => {
  const request = new Request( baseUrl + url, {
    method: "DELETE"
  });

  return fetch(request).then(onSuccess, onError);
}



// Success and Error functions
const onSuccess = (response) => {
  return response.json();
}


const onError  = (error) => {
  console.log(error); // eslint-disable-line no-console
}
