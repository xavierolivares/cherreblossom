const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/testdb.db", sqlite3.OPEN_READWRITE, err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Deleting all results from the frequent_browsers table in the Cherrie SQlite database...");
});

let sql = `DELETE FROM frequent_browsers`;

db.serialize(() => {
	db.each(
		sql,
		(err, row) => {
			if (err) {
				console.log(err.message);
			}
		}
	);
});

db.close(err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Work complete. Closing the clear request and connection.");
});
