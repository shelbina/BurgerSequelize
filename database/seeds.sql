-- In this file, write insert queries to populate the burgers table with at least three entries.
-- Run the schema.sql and seeds.sql files into the mysql server from the command line
-- Now you're going to run these SQL files.
-- Make sure you're in the db folder of your app.
-- Start MySQL command line tool and login: mysql -u root -p.
-- With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
-- Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
-- Close out of the MySQL command line tool: exit.


INSERT INTO burgers(burger_name, devoured, date)

VALUES ("Salmon Burger", true, "2017-09-09 09:00:00"),
       ("Buffalo Chicken Burger", false, "2017-09-09 09:00:00"),
       ("All American Burger", false, "2017-09-09 09:00:00"),
       ("Tuscan Avacado Burger", true, "2017-09-09 09:00:00");