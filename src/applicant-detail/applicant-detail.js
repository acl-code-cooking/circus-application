const json = window.localStorage.getItem('applicants');

let applicant = null;
if(json) {
    const applicants = JSON.parse(json);
    applicant = applicants[applicants.length - 1];
} else {
    window.location = '/';
}

const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');

name.textContent = applicant.name;
position.textContent = applicant.position;
peanuts.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerNames.join(', ');
