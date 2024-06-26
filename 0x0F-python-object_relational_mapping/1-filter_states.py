#!/usr/bin/python3
"""A script that lists all states."""
import MySQLdb
import sys


if __name__ == "__main__":
    username, password, name = sys.argv[1:]
    db = MySQLdb.connect(
        host="localhost", port=3306, user=username,
        passwd=password, db=name
    )
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC;")
    for state in cur.fetchall():
        print(state)
    cur.close()
    db.close()
