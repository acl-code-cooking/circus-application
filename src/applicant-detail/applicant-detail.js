const json = window.localStorage.getItem('applicants');
let applicants = [];

let applicant = null;
if(json) {
    applicants = JSON.parse(json);
} else {
    window.location = '/';
}
// code cook 
const searchParam = new URLSearchParams(window.location.search);
// code cook
const nameToFind = searchParam.get('name');

console.log(searchParam);
console.log(window.location.search);
console.log(nameToFind);

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index];

    if(currentApplicant.name === nameToFind) {
        applicant = currentApplicant;
        break;
    }
}


const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');

name.textContent = applicant.name;
position.textContent = applicant.position;
peanuts.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerNames.join(', ');
