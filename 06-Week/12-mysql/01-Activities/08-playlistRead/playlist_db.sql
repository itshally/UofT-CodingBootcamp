CREATE DATABASE playlist_db;
DROP TABLE playlist_db;
CREATE TABLE songs(
	id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    PRIMARY KEY(id)
);

INSERT INTO songs VALUE ("Bad Guy", "Billie Eilish", "Pop");
INSERT INTO songs VALUE ("Every Breath You Take", "The Police", "Rock");
INSERT INTO songs VALUE ("Sweet but Psycho", "Ava Max", "Pop");
INSERT INTO songs VALUE ("Die a Happy Man", "Thomas Rhett", "Country");
INSERT INTO songs VALUE ("That's What I Like", "Bruno Mars", "RnB"); 
INSERT INTO songs VALUE ( "Should I Stay or Should I Go", "The Clash", "Punk");

SELECT * FROM songs;