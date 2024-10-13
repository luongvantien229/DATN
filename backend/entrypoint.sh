#!/bin/bash
set -e
composer install --prefer-dist --no-interaction
cp .env.example .env

# Chạy lệnh php-fpm
php-fpm
