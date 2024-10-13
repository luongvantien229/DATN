#!/bin/bash
set -e
composer install --prefer-dist --no-interaction
cp .env.example .env
composer require php-open-source-saver/jwt-auth
php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret

# Chạy lệnh php-fpm
php-fpm
