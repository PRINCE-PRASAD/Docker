
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
  







  