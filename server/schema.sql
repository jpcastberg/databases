

-- CREATE DATABASE chat;
USE chat;


/* Create other tables and define schemas for them here! */

-- CREATE TABLE users (
--   id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
--   username VARCHAR(32),
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  -- user SMALLINT UNSIGNED NOT NULL,
  user VARCHAR(32),
  text VARCHAR(150),
  roomname VARCHAR(32),
  time_created TIMESTAMP,
  PRIMARY KEY (id)
  -- CONSTRAINT FOREIGN KEY user references users id
  -- FOREIGN KEY (user)
  --   REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

