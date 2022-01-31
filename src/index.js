import './index.css';
/*import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would like to pay ${courseValue} for awesome course!`); // eslint-disable-line no-console
*/

import {  getUsers, deleteUser } from './api/userApi'


// Populate Table of users via api calls
getUsers().then( result => {
  let userBody = '';

  result.forEach(user => {
    userBody += `<tr>
                    <td><a href="#" data-id=${user.id} class="delete-user">Delete</a></td>
                    <td>${user.id}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                  </tr>`;
  });

  global.document.querySelector('#users').innerHTML = userBody;

  const deleteLinks = global.document.querySelectorAll('.delete-user');

  //  Must use Array.from() to create a real DOM collection.
  // getElementsByClassname only returns an 'array like' object.
  Array.from(deleteLinks, (link) => {
    link.onclick = (event) => {
      const elem = event.target;
      event.preventDefault();
      deleteUser(elem.attributes['data-id'].value);
      const row = elem.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });


});
