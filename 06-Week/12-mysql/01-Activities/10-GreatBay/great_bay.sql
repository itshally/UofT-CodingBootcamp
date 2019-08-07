CREATE DATABASE great_bay;

CREATE TABLE item_tbl(
	itemID INTEGER NOT NULL AUTO_INCREMENT,
    item_category VARCHAR(50) NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    item_description VARCHAR(100),
    item_starting_price INTEGER NOT NULL,
    PRIMARY KEY(itemID)
);

CREATE TABLE bidding_price_tbl(
	biddingID INTEGER NOT NULL AUTO_INCREMENT,
	item_category VARCHAR(50) NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    bidding_price INTEGER,
    PRIMARY KEY (biddingID)
);

DROP TABLE item_tbl;
SELECT * FROM item_tbl;
SELECT * FROM bidding_price_tbl;
DELETE FROM item_tbl WHERE itemID=2;