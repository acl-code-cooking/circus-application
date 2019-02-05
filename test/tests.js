import api from '../src/api.js';

const test = QUnit.test;

test('saves applicant in local storage', function(assert) {
    const applicant = { name: 'Tim' };
    api.save(applicant);

    const result = api.get();

    assert.deepEqual(result, applicant);
});

test('gets an applicant from local storage', function(assert) {
    const applicant = { name: 'Liam' };

    api.save(applicant);

    const result = api.get();
    assert.deepEqual(result, applicant);
});
