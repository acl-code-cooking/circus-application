const circusApp = document.getElementById('circus-app');
const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const peanutDisplay = document.getElementById('peanut-display');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const tony = document.getElementById('tony');
const tigger = document.getElementById('tigger');
const sally = document.getElementById('sally');
const frank = document.getElementById('frank');

peanuts.addEventListener('change', function() {
    peanutDisplay.textContent = peanuts.value;
});

circusApp.addEventListener('submit', function(event) {
    event.preventDefault();
    const applicant = {
        name: name.value
    };

    console.log(applicant);
});
