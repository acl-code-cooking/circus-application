import api from '../api.js';
const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');

const applicant = api.get();

name.textContent = applicant.name;
position.textContent = applicant.position;
peanuts.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerNames.join(', ');
