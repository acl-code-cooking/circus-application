const api = {
    save: function(applicant) {
        const serialize = JSON.stringify(applicant);
        //console.log serialize
        window.localStorage.setItem('applicant', serialize);
    },

    get: function() {
        const json = window.localStorage.getItem('applicant');
        const hydrate = JSON.parse(json);
        //console.log hydrate
        return hydrate;
    }
};

export default api;
