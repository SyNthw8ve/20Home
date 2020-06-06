import psycopg2
import datetime

from configparser import ConfigParser


def config(filename='database.ini', section='postgresql'):

    parser = ConfigParser()

    parser.read(filename)

    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception(
            'Section {0} not found in the {1} file'.format(section, filename))

    return db

def connect():

    conn = None
    try:
        params = config()

        conn = psycopg2.connect(**params)

        cur = conn.cursor()

        cur.execute('SELECT version()')

        db_version = cur.fetchone()
        print(db_version)

        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

def get_values(country_code):

    conn = None
    active = []
    timestamps = []

    try:
        params = config()

        conn = psycopg2.connect(**params)

        cur = conn.cursor()

        cur.execute(
            "SELECT active, record_date FROM recordscountry WHERE country_code='%s'" % (country_code))

        for record in cur.fetchall():

            active.append(record[0])
            timestamps.append(record[1])

        cur.close()

    except (Exception, psycopg2.DatabaseError) as error:

        print(error)

    finally:

        if conn is not None:
            conn.close()
            print('Database connection closed.')

    return active, timestamps

def update_predictions(country_code, new_predictions):

    conn = None

    try:
        params = config()

        conn = psycopg2.connect(**params)

        cur = conn.cursor()

        cur.execute(
            "DELETE FROM predictions WHERE country_code=%s;", (country_code,))

        for new_pred in new_predictions:

            query = "INSERT INTO predictions (prediction_date, prediction_value, country_code) VALUES(%s, %s, %s);"
            data = (new_pred[1], int(new_pred[0].item()), country_code,)

            cur.execute(query, data)

        conn.commit()

        cur.close()

    except (Exception, psycopg2.DatabaseError) as error:

        print(error)

    finally:

        if conn is not None:
            conn.close()
            print('Database connection closed.')