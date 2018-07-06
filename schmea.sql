

CREATE DATABASE foodspotDB;

USE foodspotDB;


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    company_name varchar(155),
    name varchar(255),
    address_id varchar(125),
    city varchar(155) ,
    state varchar(155) ,
    zip_code integer(55) ,
    phone varchar(55),
    truckType varchar(55),
    locationType varchar(55),
	username varchar(155),
	password varchar(255),
    lat varchar(55),
    lng varchar(55),
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int NOT NULL, -- AUTO_INCREMENT,
    username varchar(155) NOT NULL,
    product varchar(75) NOT NULL,
    price dec(6,2) NOT NULL,
    addon varchar(25),
    addon_price dec(6,2),

	PRIMARY KEY (id)
);

select * From users
