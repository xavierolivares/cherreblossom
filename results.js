const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/testdb.db", sqlite3.OPEN_READWRITE, err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Pulling frequent_browsers table from the Cherrie SQlite database...");
});

let sql = `SELECT * FROM frequent_browsers`;

db.serialize(() => {
	db.each(
		sql,
		(err, row) => {
			if (err) {
				console.log(err.message);
			}
			console.log(row.person_id + "\t" + row.num_sites_visited);
		}
	);
});

db.close(err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Work complete. Closing the results request and connection.");
});
