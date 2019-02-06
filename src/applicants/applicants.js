const json = window.localStorage.getItem('applicants');

let applicants = null;
if(json) {
    applicants = JSON.parse(json);
} else {
    applicants = [];
}

const tbody = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const positionCell = document.createElement('td');
    positionCell.textContent = applicant.position;
    tr.appendChild(positionCell);

    const allergyCell = document.createElement('td');
    allergyCell.textContent = applicant.allergy;
    tr.appendChild(allergyCell);
    
    const tigerNamesCell = document.createElement('td');
    tigerNamesCell.textContent = applicant.tigerNames.join(', ');
    tr.appendChild(tigerNamesCell);

    tbody.appendChild(tr);
}
