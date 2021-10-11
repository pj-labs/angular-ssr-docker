# Angular SSR with Angular Universal and Deploy with Docker

### How to run?

1. Clone the project
2. Open terminal in the project and start JSON server
    ```shell
    json-server --watch db.json
    ```
3. Open another terminal in same project and run the application

   ```
   npm run dev:ssr
   ```

### Deploy with docker

1. Build the application, use `sudo` if necessary
    ```shell
      ng build --configuration=dev && ng run pdts:server
    ```

2. Build Docker images

    ```shell
      docker build -t angular_ssr_docker .
    ```

3. Run the image

    ```shell
    docker run -p 4000:4000 angular_ssr_docker
    ```
4. Go to http://localhost:4000 to browse the application
