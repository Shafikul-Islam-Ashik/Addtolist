const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const yearInput = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#booklist');

//submitting form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const year = yearInput.value.trim();

  // Validate inputs
  if (!name || !age || !year) {
    alert('Please fill out all fields');
    return;
  }

  // Validate age and year inputs
  if (isNaN(age) || isNaN(year)) {
    alert('Age and year must be numbers');
    return;
  }

  let newRow = document.createElement('tr');

  let newName = document.createElement('td');
  newName.innerHTML = name;
  newRow.appendChild(newName);

  let newAge = document.createElement('td');
  newAge.innerHTML = age;
  newRow.appendChild(newAge);

  let newYear = document.createElement('td');
  newYear.innerHTML = year;
  newRow.appendChild(newYear);

  bookList.appendChild(newRow);

  // Clear input fields
  nameInput.value = '';
  ageInput.value = '';
  yearInput.value = '';
});
