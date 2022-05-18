# simple-ecomm
A crude e-Commerce App

## Dependencies
1. `openssl` to generate secrets
2. `docker`

## Usage

1. Create `.env` file from `template.env`.

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

Shut down the server using `docker-compose down` when needed.
