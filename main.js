// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
// function
//
//   'use strict';
const ul = document.getElementById("profiles");
const url = 'https://randomuser.me/api/1.1/?results=12&nat=us';
console.log("test");

fetch(url)
  .then(
    function(response) {
      if (response.status !==200) {
        console.log(response.status);
        return;
      }

    response.json().then(function(data) {
      console.log("here is the data:", data);
      console.log(data.results);
//
// for (i = 0; i < data.results.length; i++) {
//     let medium = data.results[i].medium;
//     let name = ((data.results[i].name.first) + " " + (data.results[i].name.last));
//     let email = data.results[i].email;
//     let street = data.results[i].street;
//     let city = data.results[i].city;
//     let state = data.results[i].state;
//     let postcode = data.results[i].postcode;
//     let phone = data.results[i].phone;

let info = data.results;
function renderPeople() {
  return`
 ${info.map(person => `
<ul>
   <li><img src="${person.picture.large}" alt= "profile pic"</li>
   <li class= name>${person.name.first + " " + person.name.last}</li>
   <li class= email>${person.email}</li>
   <li class= haze>${person.location.street}</li>
   <li class= haze>${person.location.city}</li>
   <li class= haze>${person.location.state}</li>
   <li class= haze>${person.location.postcode}</li>
   <li class= haze>${person.phone}</li>
</ul>
`).join('')};
`;
}

  let markup = `
  <div class="customers">
  ${renderPeople(data.results)}
  </div>
  `
document.body.innerHTML += markup;

})

}
);
