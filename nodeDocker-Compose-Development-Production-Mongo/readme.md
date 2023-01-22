1st we do all the nessary changes in the the docker-compose.yml

then run this command

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

want to go inside bash shell type this command 

mongosh -u "prince" -p "mypassword"

insideshell ``db`` for check present database
 command ``show dbs`` for show total database
 for create new or use database type command ``use databasename``
for inserting the single in db type `db.books.insertOne({"name": "Doglapan by ashneer Grover"})`

if u dont want to use bash for log in use this command 
```
docker exec -it nodedocker-compose-development-production-mongo-mongo-1 mongosh -u "prince" -p "mypassword"
```
but one if u delete the container the data that u feed inside the db is deleted and if u recreate the database you will not get that data again.

if want to keep the the data constant use volume in docker-compose.yml

for making any changes you have to mmake your container down 

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```
then 

once u set the named volume u has to use this command because it has -v that remove all volumes with the containers 
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```
then
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```
then the question is how we delete the unwanted volume so we can use ``prune`` command but u have to take care wheather the container is started or not because it delete only that volume that is not use by container at a time.
```
docker volume prune
```
for find the inserted data in the database go inside the paricular data base 
```

test> use mydb
switched to db mydb
mydb> db.books.insertOne({"name": "Doglapan by ashneer Grover"})
{
  acknowledged: true,
  insertedId: ObjectId("63cd0c39a51b43d8406093a9")
}
mydb> db.books.find()
[
  {
    _id: ObjectId("63cd0c39a51b43d8406093a9"),
    name: 'Doglapan by ashneer Grover'
  }
]
```
if u want to know all information about any container use this command 

```
docker inspect nodedocker-compose-development-production-mongo-mongo-1
```
and add the new ip address to mongooes link with @:PortNo with configuring the mongooes

then check by doing log command does it show database is connected or not

```
docker logs nodedocker-compose-development-production-mongo-node-app-1  
```
if u dont want to add the ip address manually because it change every time use ``@mongo`` insted of ip address.
  
  


