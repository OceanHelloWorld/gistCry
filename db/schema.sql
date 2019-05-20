/*  Execute this file from the command line by typing:
 *    brew services start mysql
 *    mysql.server start
 *    mysql -u root < schema.sql
 *    mysql -u root
 *  to create the database and the tables.*/


-- create a database for gist_list app only if it doesn't exist
DROP DATABASE IF EXISTS gist_list;
CREATE DATABASE IF NOT EXISTS gist_list;

USE gist_list;

CREATE TABLE IF NOT EXISTS users (
  id INT(10) NOT NULL auto_increment,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS gist_edits (
  id INT(10) NOT NULL auto_increment,
  timestamp SMALLINT(5) NOT NULL,
  star SMALLINT(5) NOT NULL,
  username INT(10),
  FOREIGN KEY (username)
    REFERENCES users(id)
    ON DELETE CASCADE,
  url VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS files (
  id INT(10) NOT NULL auto_increment,
  intro VARCHAR(200),
  file_name VARCHAR(20) NOT NULL,
  content VARCHAR(2000),
  gist_edit INT(10),
  FOREIGN KEY (gist_edit)
    REFERENCES gist_edits(id)
    ON DELETE CASCADE,
  PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS gists_forked (
  id INT(10) NOT NULL auto_increment,
  gist_edit INT(10),
  FOREIGN KEY (gist_edit)
    REFERENCES gist_edits(id)
    ON DELETE CASCADE,
  username INT(10),
  FOREIGN KEY (username)
    REFERENCES users(id)
    ON DELETE CASCADE,
  PRIMARY KEY(id)
);


INSERT INTO users (username, password) VALUES ('admin1', 'p4ssw0rd1');
INSERT INTO users (username, password) VALUES ('admin2', 'p4ssw0rd2');
INSERT INTO users (username, password) VALUES ('admin3', 'p4ssw0rd3');
INSERT INTO users (username, password) VALUES ('admin4', 'p4ssw0rd4');
INSERT INTO gist_edits (timestamp, star, username, url) VALUES (0020, 0, 2, 'h2s4');
INSERT INTO gist_edits (timestamp, star, username, url) VALUES (0230, 0, 1, 'skfl');
INSERT INTO gist_edits (timestamp, star, username, url) VALUES (0420, 0, 4, 'fsk2');
INSERT INTO files (intro, file_name, content, gist_edit) VALUES ('boiler plate', 'index.js', 'console.log('');', 2);
INSERT INTO files (intro, file_name, content, gist_edit) VALUES ('output hello world', 'index.js', 'console.log("Hello world");', 2);


-- create a table to store items

-- unique id, name, quantity fields

-- add a test item






