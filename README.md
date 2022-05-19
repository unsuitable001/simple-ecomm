# simple-ecomm
A crude e-Commerce App

## Dependencies
1. `openssl` to generate secrets
2. `docker`

## Usage

1. Create `.env` file from `template.env`. You can copy paste the lines from `template.env` till `# secrets` section.

2. Generate secrets and append to `.env` automatically.

    ```bash
    ./secret-gen.sh
    ```

3. Build the required docker images
    ```bash
    docker-compose build
    ```

4. Turn up the services
    ```bash
    docker-compose up -d
    ```
5. Access the server from `http://localhost:8080`. You can change the port from `.env` file.

Shut down the server using `docker-compose down` when needed.
