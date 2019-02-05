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

    console.log(applicant);
    // stringify JSON onject and set to variable(serialize)
    const serialize = JSON.stringify(applicant);
    //console.log serialize

    // save the applicant object using setItem();
    window.localStorage.setItem('applicant', serialize);

    window.location = 'thanks.html';
});
