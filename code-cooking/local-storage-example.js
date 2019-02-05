

const applicant = {
    name: 'jeff',
    position: 'gang member',
    allergy: '3',
    tigerNames: ['tony', 'sally', 'tigger']
};

const serialize = JSON.stringify(applicant);
//console.log serialize
window.localStorage.setItem('applicant', serialize);

const json = window.localStorage.getItem('applicant');
const hydratedApplicant = JSON.parse(json);

console.log(hydratedApplicant);