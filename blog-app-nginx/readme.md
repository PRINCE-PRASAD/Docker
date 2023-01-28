```

PS C:\Users\PRINCE\Desktop\GITHUB\Docker\blog-app> docker exec -it blog-app-redis-1 bash
root@992e664ee823:/data# redis-cli 
127.0.0.1:6379>
127.0.0.1:6379>
127.0.0.1:6379> KEYS *
(empty array)
127.0.0.1:6379> KEYS *
1) "sess:7bmMxGtXcJ_ncByQ4vQDqkN3nuRtVsZM"
127.0.0.1:6379> GET "sess:7bmMxGtXcJ_ncByQ4vQDqkN3nuRtVsZM"
"{\"cookie\":{\"originalMaxAge\":300000,\"expires\":\"2023-01-24T17:08:53.082Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}"
```