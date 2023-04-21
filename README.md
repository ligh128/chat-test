# chat-test

A simple web application built using Node.js, Express, React, and PostgreSQL.

## Getting Started

To run the application locally, you should have Node.js , npm , and PostgreSQL installed on your machine. Follow these steps to run the application:

1. Clone the repository: git clone https://github.com/your-username/your-repo-name.git> .
2. Navigate to the client folder: cd your-repo-name/client and run npm install to install client dependencies.
3. Navigate to the server folder: cd your-repo-name/server and run npm install to install server dependencies.
4. Create a new PostgreSQL database and run the SQL script located in the database.js file to create the necessary tables.
5. Update the database connection settings in server/database.js .
6. Start the server: cd your-repo-name/server and run npm start .
7. Start the client: cd your-repo-name/client and run npm start .
   This will start the application and open a browser window displaying the running application. Any changes to the code will automatically trigger a re-build and reload the browser.

## Folder Structure

The project code is organized into different folders according to their functionality:

- client : This folder contains the front-end code for the web application. It is built using React and Material-UI library.
- server : This folder contains the back-end code for the web application. It is built using Node.js, Express, and PostgreSQL.

## Libraries and Tools

This project uses the following libraries and tools:

- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 engine.
- [Express](https://expressjs.com/) - A minimalist web framework for Node.js.
- [PostgreSQL](https://www.postgresql.org/) - A powerful open-source relational database system for storing data.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Material-UI](https://material-ui.com/) - A React UI framework for building responsive and accessible web applications.

## API Endpoints

The API endpoints for the server are defined in server/index.js . You can modify these endpoints to match your application's requirements.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b new-feature
3. Make your changes and commit them: git commit -m 'Add new feature'
4. Push to the branch: git push origin new-feature
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
