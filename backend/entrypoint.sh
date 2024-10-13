#!/bin/bash
set -e
composer install
cp .env.example .env

# Chạy lệnh php-fpm
php-fpm
