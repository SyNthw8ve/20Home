/*SECTION: Tables*/

DROP TABLE IF EXISTS Predictions;
DROP TABLE IF EXISTS WorksIn;
DROP TABLE IF EXISTS LivesIn;
DROP TABLE IF EXISTS FromCountry;
DROP TABLE IF EXISTS CountryCases;
DROP TABLE IF EXISTS RegionCases;
DROP TABLE IF EXISTS HasRegions;
DROP TABLE IF EXISTS Notify;
DROP TABLE IF EXISTS NewCase;
DROP TABLE IF EXISTS HasSymptoms;
DROP TABLE IF EXISTS Notifications;
DROP TABLE IF EXISTS PointCases;
DROP TABLE IF EXISTS Symptom;
DROP TABLE IF EXISTS HealthProfissional;
DROP TABLE IF EXISTS DBUser;
DROP TABLE IF EXISTS RecordsRegion;
DROP TABLE IF EXISTS Region;
DROP TABLE IF EXISTS RecordsCountry;
DROP TABLE IF EXISTS Country;


CREATE TYPE medical_role AS ENUM ('doctor', 'nurse', 'other');
CREATE TYPE not_type AS ENUM ('region', 'proximity');

CREATE TABLE Country (

    country_code char(2),
    country_name varchar(32),
    confirmed integer,
    deaths integer,
    recovered integer,
    lat decimal, 
    long decimal,

    PRIMARY KEY (country_code)
);

CREATE TABLE RecordsCountry (

    country_code char(2),
    record_date timestamp,
    recovered integer,
    deaths integer,
    cases integer,
    active integer, 

    FOREIGN KEY (country_code) REFERENCES Country(country_code),
    PRIMARY KEY (country_code, record_date)
);

CREATE TABLE Region (

    region_name varchar(32),
    long decimal,
    lat decimal,

    PRIMARY KEY (region_name)
);

CREATE TABLE RecordsRegion (

    region_name varchar(32),
    record_date timestamp,
    confirmed_cases integer,
    recovered integer,
    deaths integer,

    FOREIGN KEY (region_name) REFERENCES Region(region_name),
    PRIMARY KEY (region_name, record_date)
);

CREATE TABLE DBUser (

    first_name varchar(32),
    last_name varchar(32),
    username varchar(32),
    email text unique,
    long decimal,
    lat decimal,
    password char(60),
    role char(1),

    PRIMARY KEY (username)
);

CREATE TABLE HealthProfissional (

    health_code char(9) unique,
    institution text,
    position medical_role,
    username varchar(32),

    PRIMARY KEY (health_code),
    FOREIGN KEY (username) REFERENCES DBUser(username)
);

CREATE TABLE Symptom (

    symptom_name text,
    percentage decimal, 

    PRIMARY KEY (symptom_name)
);

CREATE TABLE PointCases (

    ID serial,
    long decimal,
    lat decimal,
    case_time timestamp,

    PRIMARY KEY (id)
);

CREATE TABLE Notifications (

    ID serial,
    notification_time timestamp,
    notification_type not_type,
    is_read boolean,

    PRIMARY KEY (id)
);

CREATE TABLE Predictions (

    prediction_date timestamp,
    prediction_value integer,
    country_code char(2),

    PRIMARY KEY (country_code, prediction_date),
    FOREIGN KEY (country_code) REFERENCES Country(country_code)
);

/*SECTION: Relations*/

CREATE TABLE HasSymptoms (

    symptom_name text,
    case_id integer,

    FOREIGN KEY (symptom_name) REFERENCES Symptom(symptom_name),
    FOREIGN KEY (case_id) REFERENCES PointCases(ID),

    PRIMARY KEY (symptom_name, case_id)
);

CREATE TABLE NewCase (

    not_id integer,
    case_id integer,

    FOREIGN KEY (not_id) REFERENCES Notifications(ID),
    FOREIGN KEY (case_id) REFERENCES PointCases(ID),

    PRIMARY KEY (not_id, case_id)
);

CREATE TABLE Notify (

    not_id integer,
    username varchar(32),

    FOREIGN KEY (not_id) REFERENCES Notifications(ID),
    FOREIGN KEY (username) REFERENCES DBUser(username),

    PRIMARY KEY (not_id, username)
);

CREATE TABLE HasRegions (

    country_code char(2),
    region_name varchar(32),

    FOREIGN KEY (country_code) REFERENCES Country(country_code),
    FOREIGN KEY (region_name) REFERENCES Region(region_name),

    PRIMARY KEY (country_code, region_name)
);

CREATE TABLE RegionCases (

    record_date timestamp,
    region_name varchar(32),

    FOREIGN KEY (region_name, record_date) REFERENCES RecordsRegion(region_name, record_date),
    FOREIGN KEY (region_name) REFERENCES Region(region_name),

    PRIMARY KEY (region_name, record_date)
);

CREATE TABLE CountryCases (

    record_date timestamp,
    country_code char(2),

    FOREIGN KEY (country_code, record_date) REFERENCES RecordsCountry(country_code, record_date),
    FOREIGN KEY (country_code) REFERENCES Country(country_code),

    PRIMARY KEY (country_code, record_date)
);

CREATE TABLE FromCountry (

    username varchar(32),
    country_code char(2),

    FOREIGN KEY (username) REFERENCES DBUser(username),
    FOREIGN KEY (country_code) REFERENCES Country(country_code),

    PRIMARY KEY (username, country_code)
);

CREATE TABLE LivesIn (

    username varchar(32),
    region_name varchar(32),

    FOREIGN KEY (username) REFERENCES DBUser(username),
    FOREIGN KEY (region_name) REFERENCES Region(region_name),

    PRIMARY KEY (username, region_name)
);

CREATE TABLE WorksIn (

    username varchar(32),
    region_name varchar(32),

    FOREIGN KEY (username) REFERENCES DBUser(username),
    FOREIGN KEY (region_name) REFERENCES Region(region_name),

    PRIMARY KEY (username, region_name)
);

CREATE TABLE InCountry (

    ID integer,
    country_code char(2),

    FOREIGN KEY (ID) REFERENCES PointCases(ID),
    FOREIGN KEY (country_code) REFERENCES Country(country_code),

    PRIMARY KEY (ID, country_code)
);

CREATE TABLE InRegion (

    ID integer,
    region_name varchar(32),

    FOREIGN KEY (ID) REFERENCES PointCases(ID),
    FOREIGN KEY (region_name) REFERENCES Region(region_name),

    PRIMARY KEY (ID, region_name)
);

CREATE TABLE IsHealthProfessional (

    username varchar(32),
    health_code char(9),

    FOREIGN KEY (username) REFERENCES DBUser(username),
    FOREIGN KEY (health_code) REFERENCES HealthProfissional(health_code),

    PRIMARY KEY (username, health_code)
);