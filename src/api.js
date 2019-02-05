const api = {
    save: function(applicant) {
        const serialize = JSON.stringify(applicant);
        window.localStorage.setItem('applicant', serialize);
    },

    get: function() {
        const json = window.localStorage.getItem('applicant');
        const hydrate = JSON.parse(json);
        return hydrate;
    }
};

export default api;
