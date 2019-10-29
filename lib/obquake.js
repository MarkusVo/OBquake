'use strict';

const adapterFactory = require('./adapters/adapter-factory/index');

class obquake {    
    constructor(db){
        let config;
        let adapter;

        this.config = db;
        this.adapter = adaptDatabase(db.db);
    }
}

const adaptDatabase = (db) => {
    return new adapterFactory(db);
}

module.exports = obquake;