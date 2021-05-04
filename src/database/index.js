const mysql = require("mysql");

const pool = mysql.createPool({
  password: "",
  user: "root",
  database: "test",
  host: "localhost",
  port: "3306",
});

let users = {};

users.create = (name, age, gender) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO user (name, age, gender) VALUES (?,?,?)",
      [name, age, gender],
      (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      }
    );
  });
};

users.read = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM user", (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

users.readOne = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM user WHERE id = ?", id, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

users.update = (id, name, age, gender) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE user SET name = ?, age = ?, gender = ? WHERE id = ?",
      [name, age, gender, id],
      (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      }
    );
  });
};

users.delete = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM user WHERE id = ?", id, (error, result) => {
      if (error) return reject(error);
      return resolve(result);
    });
  });
};

module.exports = users;
