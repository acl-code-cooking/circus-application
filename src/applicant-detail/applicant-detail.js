
const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');
// const applicantDetail = document.getElementById('applicant-detail');

// pull the json applicant object off of localStorage using getItem();
const json = window.localStorage.getItem('applicant');
// parse the JSON and set as the hydratedApplicant version of applicant
const hydratedApplicant = JSON.parse(json);

name.textContent = hydratedApplicant.name;
position.textContent = hydratedApplicant.position;
peanuts.textContent = hydratedApplicant.allergy;
tigerNames.textContent = hydratedApplicant.tigerNames.join(', ');

// function renderApplicantDetail() {
//     return `
//     <dl>
//       <dt>Name:</dt>
//       <dd id="name">${hydratedApplicant.name}</dd>
//       <dt>Position:</dt>
//       <dd id="position">${hydratedApplicant.position}</dd>
//       <dt>Allergic To Peanuts:</dt>
//       <dd id="peanuts">${hydratedApplicant.allergy}</dd>
//       <dt>Tiger Names:</dt>
//       <dd id="tiger-names">${hydratedApplicant.tigerNames}</dd>
//     </dl>
//   `;
// }

// let detail = renderApplicantDetail();
// console.log(applicantDetail);
// applicantDetail.innerHTML = detail;
