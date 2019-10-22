'use strict';

const obquake = require('../lib/obquake');
const expect = require('chai').expect;

describe('Instance', () => {
    it('should create Instance of obquake', () => {
        const quake = new obquake();
        expect(typeof(quake)).to.equal('object');
    })
})