#!/bin/bash
set -e
composer install --prefer-dist --no-interaction
cp .env.example .env
chmod -R 777 storage
# php artisan migrate:refresh --seed

# Chạy lệnh php-fpm
php-fpm
