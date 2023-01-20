
for run use command  
```  
docker build -t node-app-image .
```

```
docker image ls
```

```
docker run -p 3000:3000 -d --name node-app node-app-image
```

```
docker ps
```

then check local host:3000
if dont work pull node:15 from docker

docker exec -it node-app bash

ls

output
```
Dockerfile  index.js  node_modules  package-lock.json  package.json  yarn.lock
```

Note -: If your source file change u have to te create the image yhen container then run on local host then u can see the changes if u don't use volume.

and also add nodemon for changes according to realtime when u save

docker rm node-app -f
  
docker run -v pathtofolderonlocation:pathtofolderoncontainer -p 3000:3000 -d --name node-app node-app-image
for example 
docker run -v C:\Users\PRINCE\Desktop\GITHUB\Docker\nodeDocker\:/app -p 3000:3000 -d --name node-app node-app-image

or for windows powershell-${pwd}, cmd-%cd%

docker build -t node-app-image . (rebuild the image)

docker run -v ${pwd}:/app -p 3000:3000 -d --name node-app node-app-image

if someone delete the nodw_mpdules localhost will not work then we have do the hack for it by adding one more volume at app

docker rm node-app -f

docker run -v ${pwd}:/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image

here is a security issue we can create the file via bash in terminal so we have to shoe it a only read only file

docker rm node-app -f
docker run -v ${pwd}:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image

```
PS C:\Users\PRINCE\Desktop\GITHUB\Docker\nodeDocker> docker exec -it node-app bash
root@00c901683fd4:/app# touch hello
touch: cannot touch 'hello': Read-only file system
```

when u add enviroment veriable from file

docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name node-app node-app-image


Note -: when you create and delete the containers they preserve some data that not very use full for us so use this command for removing this

docker volume rm (volumename)
or
docker volume prune    for all except the running container

but if u want to remove the volume with the container at same time use this

```
docker rm node-app -fv
```



