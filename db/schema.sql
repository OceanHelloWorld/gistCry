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
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
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


-- INSERT INTO users (username, password) VALUES ('admin', 'p4ssw0rd');

-- create a table to store items

-- unique id, name, quantity fields

-- add a test item






