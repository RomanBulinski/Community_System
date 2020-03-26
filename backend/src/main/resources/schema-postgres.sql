DROP TABLE IF EXISTS cities;
CREATE TABLE cities(id serial PRIMARY KEY,
                        name VARCHAR(255),
                        population integer);



DROP TABLE IF EXISTS permissions;
CREATE TABLE permissions(id serial PRIMARY KEY,
                        permission_name VARCHAR(255));

DROP TABLE IF EXISTS roles;
CREATE TABLE roles(id serial PRIMARY KEY, role_name VARCHAR(255));

DROP TABLE IF EXISTS permissions_in_role;
CREATE TABLE permissions_in_roles(id serial PRIMARY KEY,
                        role_id integer,
                        permissions_id integer );

DROP TABLE IF EXISTS users;
CREATE TABLE users(     id serial PRIMARY KEY,
                        login VARCHAR(255),
                        email VARCHAR (255),
                        role_id integer );

DROP TABLE IF EXISTS resolutions;
CREATE TABLE resolutions(id serial PRIMARY KEY,
                        symbol VARCHAR(50),
                        title VARCHAR(255),
                        text VARCHAR (1000),
                        year integer );

DROP TABLE IF EXISTS owners;
CREATE TABLE owners(    id serial PRIMARY KEY,
                        name VARCHAR(255),
                        surname VARCHAR(255),
                        email VARCHAR(255) );

DROP TABLE IF EXISTS properties;
CREATE TABLE properties(id serial PRIMARY KEY,
                        owner_ID integer REFERENCES owners(id),
                        type VARCHAR(255),
                        symbol VARCHAR(255),
                        area numeric,
                        level integer,
                        participation numeric );

DROP TABLE IF EXISTS polls;
CREATE TABLE polls(     id serial PRIMARY KEY,
                       resolutionid integer,
                       propertyid integer,
                       ownerid integer,
                       vote VARCHAR(25));

