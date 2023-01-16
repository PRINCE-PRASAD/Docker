# Docker
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime. Using Docker, you can quickly deploy and scale applications into any environment and know your code will run.

# What is containerization?

Containerization is a software deployment process that bundles an application’s code with all the files and libraries it needs to run on any infrastructure. Traditionally, to run any application on your computer, you had to install the version that matched your machine’s operating system. For example, you needed to install the Windows version of a software package on a Windows machine. However, with containerization, you can create a single software package, or container, that runs on all types of devices and operating systems.

# docker vs vm

docker verulise ap;icatuion layer and vm vertulise aplication and os layer

![](https://picsum.photos/seed/picsum/1000/500 "yutyutyutyu")

```docker
docker pull redis
docker run postgres:10.10
docker run redis
docker run -d redis
docker ps
docker ps -a
docker start CONTAINER ID 
docker stop CONTAINER ID 
docker images
docker container ls -a
docker image ls -a

port binding in laptop port 6000 and 6001
docker run -p6000:6379 redis
docker run -p6001:6379 redis:4.0

or 

docker run -p6000:6379 -d redis
docker run -p6001:6379 -d redis:4.0
```
```
docker run -d -p6001:6379 --name redids-older redis:4.0
```
``docker run -d -p6000:6379 --name redids-latest redis``
```
CONTAINER ID   IMAGE       COMMAND                  CREATED              STATUS              PORTS                    NAMES
0daedfb19056   redis       "docker-entrypoint.s…"   9 seconds ago        Up 4 seconds        0.0.0.0:6000->6379/tcp   redids-latest
0071fd17aedb   redis:4.0   "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:6001->6379/tcp   redids-older
```
```
docker logs redids-older

```     
docker exec -it 0071fd17aedb /bin/bash
or 
docker exec -it redids-older /bin/bash


--------------------------------------------------------