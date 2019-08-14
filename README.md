# Cherreblossom Goal

Access the provided database and list the top ten site visitors in descending order to the frequent_browsers table.

## Technologies: Node.js, SQLite, SQL, JavaScript

After cloning the repository into your chosen directory, you will need to run the following in your terminal -

## Step 1: npm install sqlite

We want to connect to the sqlite database through node.js. Installing this sqlite module will provide us the methods to accomplish this.

## Step 2: node filter.js

Within this file, we are running a SQL query that does the following:

- Inserts results into the frequent_browsers table, which has two integer columns: person_id, num_sites_visited

- My SQL query essentially looks at the visits table to accomplish this, by counting each instance of a visit by person id. It then sorts the count in descending order, meaning that the people with most visits will be at the top.

- We only want to insert 10 ids into the frequent_browsers table

**Running this multiple times will result in duplicate instances of the top ten visitors in frequent_browsers. See Step 4 for a remedy.**

## Step 3: node results.js
This runs a SQL query into the frequent_browsers table. It console logs the results.

**Will not return users if you haven't run Step 2 first.**

## Step 4: node clear.js
In case you wanted to clear the table, you can run this.

## Helpful Resources

Connecting To SQLite Database Using Node.js: http://www.sqlitetutorial.net/sqlite-nodejs/connect/

Querying Data in SQLite Database from Node.js Applications: http://www.sqlitetutorial.net/sqlite-nodejs/query/

