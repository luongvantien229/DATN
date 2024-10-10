# Dockerfile for Laravel Backend
FROM php:8.2-fpm
# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git

# Install PHP extensions
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libpq-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install -j$(nproc) pdo_pgsql zip

# Install Redis
RUN apt-get update && apt-get install -y \
    libzip-dev \
    && pecl install redis \
    && docker-php-ext-enable redis


# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . /var/www

# Install Laravel dependencies
# RUN composer install --optimize-autoloader --no-dev

RUN composer install

# Set file permissions
RUN mkdir -p /var/www/storage && \
    chown -R www-data:www-data /var/www/storage && \
    chmod -R 777 /var/www/storage 

# Expose port 8000
EXPOSE 8000

# Start PHP-FPM server
CMD ["php-fpm"]
