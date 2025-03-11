# Angular SSR with Angular Universal and Deploy with Docker

### How to run?

1. Clone the project
2. Open a terminal and run the application

   ```
   pnpm start
   ```
3. Go to http://localhost:4200 to browse the application

### Deploy with docker

1. Build the application, use `sudo` if necessary
    ```shell
      pnpm build && pnpm serve:ssr
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
