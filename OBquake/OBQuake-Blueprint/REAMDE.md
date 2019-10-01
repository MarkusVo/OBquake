# Postgres-Migrations Blueprint

Blueprint repository for postgres migrations. [db-migrate docs](https://db-migrate.readthedocs.io/en/latest/API/SQL/#addcolumntablename-columnname-columnspec-callback)

# Usage
```
yarn install
yarn db:start
yarn db:migrations:up
yarn db:migrations:down
yarn db:migrations:redo
yarn db:migrations:create <name of migration>

# Dump the schema (verify migrations)
eval $(egrep -v '^#' .env | xargs) docker-compose exec db pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME
```
