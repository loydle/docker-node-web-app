# Clone
`git clone https://github.com/loydle/docker-node-web-app`

# Build 
`docker build -t loydle/node-web-app .`

# Run
`$ docker run -p 3000:80 loydle/node-web-app`

`$ chrome http://0.0.0.0:3000`

# Go inside container
`$ docker ps`

`$ docker exec -it <container id> /bin/bash`

# Sources
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
