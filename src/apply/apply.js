const circusApp = document.getElementById('circus-app');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const peanutDisplay = document.getElementById('peanut-display');

peanuts.addEventListener('change', function() {
    peanutDisplay.textContent = peanuts.value;
});

circusApp.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = circusApp.elements.name.value;
    const tigerNames = [];

    for(let i = 0; i < circusApp.tiger.length; i++) {
        const name = circusApp.tiger[i];
        if(name.checked) {
            tigerNames.push(name.value);
        }
    }

    const applicant = {
        name: name,
        position: position.value,
        allergy: peanuts.value,
        tigerNames: tigerNames
    };

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicant);
    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);

    window.location = 'thanks.html';
});
