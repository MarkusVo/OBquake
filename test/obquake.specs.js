'use strict';

const obquake = require('../lib/obquake');
const expect = require('chai').expect;

//create Instance in beforeeach 
const testconfig = require('../test/config_test.json');

describe('Instance', () => {
    it('should create Instance of obquake and parse config', () => {
        const quake = new obquake(testconfig);
        expect(quake.config).to.equal(testconfig);
        expect(typeof(quake)).to.equal('object');
    });
});

describe('OBquake', () => {
    it('should hold databaseAdapter', () => {
        const quake = new obquake(testconfig);
        expect(quake.adapter).to.not.equal(null);
    })
})