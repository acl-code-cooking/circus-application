





const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');

const json = window.localStorage.getItem('applicant');
const hydratedApplicant = JSON.parse(json);


name.textContent = hydratedApplicant.name;
position.textContent = hydratedApplicant.position;
peanuts.textContent = hydratedApplicant.allergy;
tigerNames.textContent = hydratedApplicant.tigerNames.join(', ');

