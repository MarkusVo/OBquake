'uses strict';

const postgresAdapter = require('../postgres/index');

class adapterFactory {
    constructor(db){
    let adapter;
        const type = db.type;
        if(type === 'postgres'){
            this.adapter = new postgresAdapter(db);
        } else if(type === 'mysql'){
            //This one should return an adapter for MySQL databases
            this.adapter = null;
        } else{
            console.error('Either yout database is not supported or you didnt pass the database in the config');
        }
    }
}

const getAdapter = () => {return this.adapter};

module.exports = adapterFactory;