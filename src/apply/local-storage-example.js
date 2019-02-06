import api from '../api.js';


const applicant = {
    name: 'jeff',
    position: 'dummy',
    allergy: '3',
    tigerNames: ['tony', 'sally', 'tigger']
};

api.save(applicant);
console.log(api.get());
