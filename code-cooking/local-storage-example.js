import api from '../src/api.js';

const applicant = {
    name: 'jeff',
    position: 'gang member',
    allergy: '3',
    tigerNames: ['tony', 'sally', 'tigger']
};

api.save(applicant);
console.log(api.get());
