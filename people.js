const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/testdb.db", sqlite3.OPEN_READWRITE, err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Pulling names of frequent_browsers table from the Cherre SQlite database...");
});

let sql = `SELECT first_name, last_name, id
                FROM people
                    INNER JOIN frequent_browsers
                        ON frequent_browsers.person_id = people.id
                    WHERE people.id = frequent_browsers.person_id `;

db.serialize(() => {
	db.each(
		sql,
		(err, row) => {
			if (err) {
				console.log(err.message);
			}
			console.log(row.id + "\t" + row.first_name + "\t" + row.last_name);
		}
	);
});

db.close(err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Work complete. Closing the name request and connection.");
});
