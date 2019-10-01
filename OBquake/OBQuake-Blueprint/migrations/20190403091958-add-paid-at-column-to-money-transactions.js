'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => {
  return db.addColumn('money_transactions', 'paid_at', { type: 'timestamp' });
};

exports.down = function(db) {
  return db.removeColumn('money_transactions', 'paid_at');;
};

exports._meta = {
  "version": 1
};
