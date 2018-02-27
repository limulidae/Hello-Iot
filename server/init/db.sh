#!/bin/sh

createuser sophon

createdb -O sophon sophon

psql -d sophon -c "ALTER USER sophon PASSWORD 'sophon';"

