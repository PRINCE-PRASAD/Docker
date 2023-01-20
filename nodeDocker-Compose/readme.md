if u forget any command in docker comose then use this 
```
docker-compose up --help
```
output
```
Create and start containers

Options:
      --abort-on-container-exit   Stops all containers if any container
                                  was stopped. Incompatible with -d
      --always-recreate-deps      Recreate dependent containers.
                                  Incompatible with --no-recreate.
      --attach stringArray        Attach to service output.
      --attach-dependencies       Attach to dependent containers.
      --build                     Build images before starting containers.
  -d, --detach                    Detached mode: Run containers in the
                                  background
      --exit-code-from string     Return the exit code of the selected
                                  service container. Implies
                                  --abort-on-container-exit
      --force-recreate            Recreate containers even if their
                                  configuration and image haven't changed.
      --no-attach stringArray     Don't attach to specified service.
      --no-build                  Don't build an image, even if it's missing.
      --no-color                  Produce monochrome output.
      --no-deps                   Don't start linked services.
      --no-log-prefix             Don't print prefix in logs.
                                  recreate them. Incompatible with
                                  --force-recreate.
      --no-start                  Don't start the services after creating
                                  them.
      --pull string               Pull image before running
                                  ("always"|"missing"|"never") (default
                                  "missing")
      --quiet-pull                Pull without printing progress information.
      --remove-orphans            Remove containers for services not
                                  defined in the Compose file.
  -V, --renew-anon-volumes        Recreate anonymous volumes instead of
                                  retrieving data from the previous
      --scale scale               Scale SERVICE to NUM instances.
                                  Overrides the scale setting in the
                                  Compose file if present.
  -t, --timeout int               Use this timeout in seconds for
                                  container shutdown when attached or
                                  when containers are already running.
                                  (default 10)
      --timestamps                Show timestamps.
      --wait                      Wait for services to be
                                  running|healthy. Implies detached mode.
```


If we dont want to specify too may parameters during the creation of  container the docker then uses compose 
 configure your docker-compose.yml file then 
 it will create the image and run the container
 ```
docker-compose up -d
 ```
it remove the container with the volume
```
docker-compose down -v
```
if u make any chsanges it will not create another container and image but if u want to make another image then use this command
```
docker-compose up -d --build
```
