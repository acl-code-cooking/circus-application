const circusApp = document.getElementById('circus-app');
const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const peanutDisplay = document.getElementById('peanut-display');



peanuts.addEventListener('change', function() {
    peanutDisplay.textContent = peanuts.value;
});

circusApp.addEventListener('submit', function(event) {
    event.preventDefault();
    const tigerNames = [];

    for(let i = 0; i < circusApp.tiger.length; i++) {
        const name = circusApp.tiger[i];
        if(name.checked) {
            tigerNames[i] = name.value;
        }
    }

    const applicant = {
        name: name.value,
        position: position.value,
        allergy: peanuts.value,
        likeElephants: circusApp.elephants.value,
        tigerNames: tigerNames
    };

    console.log(applicant);
});
