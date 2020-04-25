/*SECTION: Tables*/

CREATE TABLE Country (

    country_code char(3),
    country_name varchar(32),
    lat decimal,
    long decimal,

    PRIMARY KEY (country_code)
);

CREATE TABLE RecordsCountry (

    country_code char(3),
    record_date date,
    record_time time,
    recovered_cases integer,
    total_deaths integer,
    new_deaths integer,
    critical_cases integer,
    total_cases integer,
    active_cases integer,
    new_cases integer,

    FOREIGN KEY (country_code) REFERENCES Country(country_code),
    PRIMARY KEY (country_code, record_date)
);

CREATE TABLE Region (

    region_code char(5),
    region_name varchar(32),
    long decimal,
    lat decimal,

    PRIMARY KEY (region_code)
);

CREATE TABLE RecordsRegion (

    region_code char(5),
    record_date date,
    confirmed_cases integer,

    FOREIGN KEY (region_code) REFERENCES Region(region_code),
    PRIMARY KEY (region_code, record_date)
);

CREATE TABLE User (

    first_name varchar(32),
    last_name varchar(32),
    username varchar(32),
    email text,
    password varchar(32),

    PRIMARY KEY (username)
);

CREATE TABLE HealthProfissional (

    first_name varchar(32),
    last_name varchar(32),
    username varchar(32),
    email text,
    password varchar(32),
    health_code char(9),
    institution text,
    position varchar(16),

    PRIMARY KEY (username)
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
    region_code char(5),
    case_date date,
    case_time timestamp,

    PRIMARY KEY (id)
);

CREATE TABLE Notifications (

    ID serial,
    case_date date,
    region_code char(5),
    case_time timestamp,

    PRIMARY KEY (id)
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
    FOREIGN KEY (username) REFERENCES User(username),

    PRIMARY KEY (not_id, username)
);

CREATE TABLE HasRegions (

    country_code char(3),
    region_code char(5),

    FOREIGN KEY (country_code) REFERENCES Country(country_code),
    FOREIGN KEY (region_code) REFERENCES Region(region_code),

    PRIMARY KEY (country_code, region_code)
);

CREATE TABLE RegionCases (

    record_date date,
    region_code char(5),

    FOREIGN KEY (record_date) REFERENCES RecordsRegion(record_date),
    FOREIGN KEY (region_code) REFERENCES Region(region_code),

    PRIMARY KEY (region_code, record_date)
);

CREATE TABLE CountryCases (

    record_date date,
    country_code char(3),

    FOREIGN KEY (record_date) REFERENCES RecordsCountry(record_date),
    FOREIGN KEY (country_code) REFERENCES Country(country_code),

    PRIMARY KEY (country_code, record_date)
);

CREATE TABLE FromCountry (

    username varchar(32),
    country_code char(3),

    FOREIGN KEY (username) REFERENCES Username(username),
    FOREIGN KEY (country_code) REFERENCES Country(country_code),

    PRIMARY KEY (username, country_code)
);


CREATE TABLE LivesIn (

    username varchar(32),
    region_code char(5),

    FOREIGN KEY (username) REFERENCES Username(username),
    FOREIGN KEY (region_code) REFERENCES Region(region_code),

    PRIMARY KEY (username, region_code)
);

CREATE TABLE WorksIn (

    username varchar(32),
    region_code char(5),

    FOREIGN KEY (username) REFERENCES Username(username),
    FOREIGN KEY (region_code) REFERENCES Region(region_code),

    PRIMARY KEY (username, region_code)
);