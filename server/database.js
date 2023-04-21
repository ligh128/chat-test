const { Client } = require("pg");

// create a new client with the appropriate database credentials
const client = new Client({
  user: "harry",
  host: "localhost",
  database: "chat",
  password: "",
  port: 5432,
});

// connect to the database
client.connect();

// function to insert a new chat message
function addMessage(sender, message) {
  client.query(
    `
    INSERT INTO messages (sender, message)
    VALUES ($1, $2)
  `,
    [sender, message],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log("New message inserted successfully");
      }
    }
  );
}

// export the functions so they can be used in other modules
module.exports = { addMessage };
