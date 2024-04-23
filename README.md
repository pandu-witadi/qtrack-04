
# qtrack server client
- server : sailsjs-mongodb
- client : react

# qtrack-02 : docker files are
Dockerfile
docker-compose.yml

# run docker
docker stop ID
docker system prune -a
docker-compose --env-file ./server/.env up

# run beckup data
./docker-backup.sh

# run restore data
./docker-restore.sh <namefile.tgz>

example (./docker-restore.sh 2024-04-22-11-44-49-backup.tgz)
