#!/bin/bash
set -e
composer install --prefer-dist --no-interaction
cp .env.example .env
chmod -R 775 storage

# Chạy lệnh php-fpm
php-fpm
