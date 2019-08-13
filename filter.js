const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/testdb.db", sqlite3.OPEN_READWRITE, err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Connected to the Cherrie SQlite database.");
});

let sql = `INSERT INTO frequent_browsers 
                    (person_id, num_sites_visited)
                SELECT 
                    personId, 
                    COUNT(*) as count
                FROM visits
                GROUP BY personId
                ORDER BY count DESC LIMIT 10`;


db.serialize(() => {
	db.all(
		sql,
		(err, row) => {
			if (err) {
				console.log(err.message);
			}
			console.log('Filtering is complete. Top ten frequent browsers have been added to frequent_browsers table.');
		}
	);
});


db.close(err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Closing the filter request.");
});
