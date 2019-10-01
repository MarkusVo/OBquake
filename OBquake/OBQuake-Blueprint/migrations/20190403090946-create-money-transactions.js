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

exports.up = async (db) => {
  await db.runSql(`
    create table money_transactions (
      id          SERIAL PRIMARY KEY,
      amount      NUMERIC(8, 2) NOT NULL CHECK (amount >= 0),
      debitor_id  serial NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
      creditor_id serial NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
      created_at  timestamp without time zone NOT NULL default (now() at time zone 'utc'),

      CHECK       (debitor_id <> creditor_id)
    );
  `);
};

exports.down = async (db) => {
  await db.dropTable('money_transactions',);
};

exports._meta = {
  "version": 1
};



