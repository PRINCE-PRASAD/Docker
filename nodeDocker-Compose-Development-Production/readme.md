 here i show the both yml file for developmet and production also with respected changes
 
 it is a development mode in which if we do any changes it will apper in the local host with binding and nodemon 
 
 ```
 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 
 ```

 ```
 docker-compose down -v
 ```

It is a production mode if we do any changes it will not apper untill we rebuild the images

```
 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
 ```

 ```
 docker-compose down -v
 ```
with having few changes in main Dokcer file we can set what will install in the particular file like no dev dependencies in the production mode .

If u have to check what inside the container follow the code 

```
docker exec -it nodedocker-compose-development-production-node-app-1 bash
```
then use ``ls`` or ``cat + file name``
