---
title: Github Action Workflow
description: DevDojo Auth ships with a Github action that can help gaurantee that your authentication is fully functional.
---


# GitHub Action Workflow for DevDojo Auth Package

## Introduction

The DevDojo Auth package includes a GitHub Action workflow that helps you ensure your application is fully functional. This workflow is designed to automate the testing process, running tests on every push and pull request to your repository. By integrating this workflow, you can guarantee that your application remains reliable and any changes made do not break existing functionality.

## Workflow Overview

### Location

The workflow file is located in the `.github/workflows/tests.yml` directory of your repository.

### Purpose

The primary purpose of this workflow is to automate the testing process. It runs tests in a clean environment to verify that your application works as expected. This helps catch issues early in the development process, reducing the chances of bugs making it to production.

## How the Workflow Works

### Trigger Events

The workflow is triggered on the following events:
- `push`: Runs the workflow on every push to the repository.
- `pull_request`: Runs the workflow on every pull request.

### Workflow Steps

The workflow consists of several steps, each performing specific tasks to set up the environment and run the tests.

#### Example Workflow Configuration:

```yaml
name: Run tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '7.4'

    - name: Install dependencies
      run: composer install --prefer-dist --no-progress --no-suggest

    - name: Copy .env file
      run: cp .env.example .env

    - name: Generate application key
      run: php artisan key:generate

    - name: Run migrations
      run: php artisan migrate

    - name: Run tests
      run: php artisan test
```

### Step-by-Step Breakdown

1. **Checkout Code:**
   ```yaml
   - name: Checkout code
     uses: actions/checkout@v2
   ```
   This step checks out your repository code so that the workflow can access it.

2. **Set Up PHP:**
   ```yaml
   - name: Set up PHP
     uses: shivammathur/setup-php@v2
     with:
       php-version: '7.4'
   ```
   This step sets up the PHP environment, specifying the PHP version to use.

3. **Install Dependencies:**
   ```yaml
   - name: Install dependencies
     run: composer install --prefer-dist --no-progress --no-suggest
   ```
   This step installs the PHP dependencies required for your application.

4. **Copy .env File:**
   ```yaml
   - name: Copy .env file
     run: cp .env.example .env
   ```
   This step copies the example environment file to create the `.env` file.

5. **Generate Application Key:**
   ```yaml
   - name: Generate application key
     run: php artisan key:generate
   ```
   This step generates the application key required by Laravel.

6. **Run Migrations:**
   ```yaml
   - name: Run migrations
     run: php artisan migrate
   ```
   This step runs the database migrations to set up the database schema.

7. **Run Tests:**
   ```yaml
   - name: Run tests
     run: php artisan test
   ```
   This step runs the application tests to ensure everything is working correctly.

## Additional Information

### Customizing the Workflow

You can customize the workflow to fit the specific needs of your project. For example, you might want to test against multiple PHP versions or include additional setup steps for services like MySQL or Redis.

### Example: Testing Against Multiple PHP Versions

```yaml
jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        php-version: ['7.4', '8.0', '8.1']

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: \${{ matrix.php-version }}

    # ... remaining steps
```

### Example: Adding MySQL Service

```yaml
services:
  mysql:
    image: mysql:5.7
    env:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: test
    options: >-
      --health-cmd "mysqladmin ping --silent"
      --health-interval 10s
      --health-timeout 5s
      --health-retries 3
    ports:
      - 3306:3306

steps:
- name: Wait for MySQL
  run: dockerize -wait tcp://localhost:3306 -timeout 1m
```

### Conclusion

By integrating the GitHub Action workflow provided by the DevDojo Auth package, you can automate your testing process and ensure that your application remains functional with every change. Customizing the workflow allows you to tailor it to the specific needs of your project, providing flexibility and robustness in your CI/CD pipeline.

