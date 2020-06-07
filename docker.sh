#!/bin/bash
DB_CONTAINER=postgres
DB_NAME=home20
DB_USER=home20sys
LOCAL_DUMP_PATH="/docker-entrypoint-initdb.d/dump.sql"

docker-compose up -d
docker cp ./db/dump.sql postgres:/docker-entrypoint-initdb.d/dump.sql
docker-compose exec -T "${DB_CONTAINER}"  psql -U "${DB_USER}" -d "${DB_NAME}" -f "${LOCAL_DUMP_PATH}"
docker-compose down