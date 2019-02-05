const api = {
    save(applicant) {
        const serialize = JSON.stringify(applicant);
        window.localStorage.setItem('applicant', serialize);
    },

    get() {
        const json = window.localStorage.getItem('applicant');
        const hydrate = JSON.parse(json);
        return hydrate;
    }
};

export default api;
