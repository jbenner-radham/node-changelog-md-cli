'use strict';

const any = jasmine.any;
const changelog = require('../../');

describe('changelog-md-cli', function () {
    it('is a function', function () {
        expect(changelog).toEqual(any(Function));
    });

    it('returns a string', function () {
        expect(changelog()).toEqual(any(String));
    });
});
