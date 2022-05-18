#!/bin/bash

echo -e "# secrets (auto-generated)" >> .env

echo -e "SESSION_SECRET=$(openssl rand -hex 128)" >> .env
echo -e "DB_ADMIN_USER=$(openssl rand -hex 16)" >> .env
echo -e "DB_ADMIN_PASS=$(openssl rand -hex 128)" >> .env
echo -e "DB_USER=$(openssl rand -hex 16)" >> .env
echo -e "DB_PASS=$(openssl rand -hex 128)" >> .env
echo -e "USERS_DB_ADMIN_USER=$(openssl rand -hex 16)" >> .env
echo -e "USERS_DB_ADMIN_PASS=$(openssl rand -hex 128)" >> .env
echo -e "USERS_DB_USER=$(openssl rand -hex 16)" >> .env
echo -e "USERS_DB_PASS=$(openssl rand -hex 128)" >> .env
