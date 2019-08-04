-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
	id INT NOT NULL AUTO_INCREMENT,
  -- Create a string column called "language" --
	language VARCHAR(50) NOT NULL,
  -- Create an integer column called "rating" --
	rating INT(10),
  -- Create a boolean column called "mastered" which will automatically fill --
	mastered BOOLEAN DEFAULT TRUE,
  -- with true when a new row is made and the value isn't otherwise defined. --
	
  -- Set the id as this table's primary key
	PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages (language, rating) VALUES ("Python", 28);
INSERT INTO programming_languages (language, rating) VALUES ("Java", 20);
INSERT INTO programming_languages (language, rating) VALUES ("Javascript", 8);
INSERT INTO programming_languages (language, rating) VALUES ("C#", 7);
INSERT INTO programming_languages (language, rating) VALUES ("PHP", 6);
INSERT INTO programming_languages (language, rating) VALUES ("C/C++", 5);
INSERT INTO programming_languages (language, rating) VALUES ("R", 3);
INSERT INTO programming_languages (language, rating) VALUES ("Objective-C", 2);
