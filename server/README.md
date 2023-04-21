This folder contains the back-end code for the web application. It is built using Node.js, Express, and PostgreSQL.

## Getting Started

To run the server locally, you should have Node.js and npm installed on your machine, as well as PostgreSQL server running. Follow these steps to run the server:

1. Clone the repository: git clone https://github.com/your-username/your-repo-name.git> .
2. Navigate to the server folder: cd your-repo-name/server
3. Install the dependencies: npm install
4. Start the server: npm start

This will start the server and connect to the PostgreSQL instance. By default, the server runs on http://localhost:4000. You can test it by visiting http://localhost:4000 in your browser.

## Database Configuration

The database configuration settings are stored in database.js . You can modify these settings to match your database credentials:
const { Pool } = require('pg');

const pool = new Pool({
user: 'your_username',
host: 'localhost',
database: 'your_database',
password: 'your_password',
port: 5432,
});

module.exports = pool;

## API Endpoints

## Libraries and Tools

This project uses the following libraries and tools:

- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 engine.
- [Express](https://expressjs.com/) - A minimalist web framework for Node.js.
- [PostgreSQL](https://www.enterprisedb.com/) - A NoSQL database used for storing data.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b new-feature
3. Make your changes and commit them: git commit -m 'Add new feature'
4. Push to the branch: git push origin new-feature
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
