# Rent-A-Car Backend

## Description

This is the backend of a Rent-A-Car application developed with NestJS. The application allows users to manage car reservations, including creating, updating, and deleting reservations. The backend connects to a database and provides a RESTful API for interacting with the data.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/rent-a-car-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd rent-a-car-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Configure environment variables. Create a `.env` file in the root of the project and add the following variables:
    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your-username
    DATABASE_PASSWORD=your-password
    DATABASE_NAME=rentacar
    ```

5. Start the application:
    ```bash
    npm run start:dev
    ```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
