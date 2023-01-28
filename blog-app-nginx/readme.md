after confegring the nginx use this command for check the loadbalancing 

```
 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2
```
 for see the database logs changes 
```
docker logs blog-app-nginx-node-app-1 -f
```
for check log changes
```
docker logs blog-app-nginx-node-app-2 -f
```

```
http://localhost:3000/api/v1
```