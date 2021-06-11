# add 'nest' database and setup user

```bash
# lookup the mongo container id, in this case - 4a9548ffc827
docker ps

# attach to the mongo container
docker exec -it 4a9548ffc827  bash

# run mongo shell with admin creds
root@4a9548ffc827:/# mongo --username root --password test

# add database 'nest'
> use nest
switched to db nest
>
# add test entry to create database
> db.test.insertOne({test:'asdf'})
...
> show dbs
...

# create user 
> db.createUser({user:'nest',pwd:'test',roles:[{role:'readWrite', db:'nest'}]})

# done!

```