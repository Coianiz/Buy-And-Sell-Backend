import mysql from 'mysql';
let connection;
export const db = {
	connect: () => {
        connection = mysql.createConnection({
            host: '35.189.33.48',
            user: 'hapi-server',
            password: 'Password123!!',
            database: 'buy-and-sell',
        });
        connection.connect();
    },
	query: (queryString, escapedValues) =>
	new Promise((resolve, reject) => {
		connection.query(queryString, escapedValues, (error, results, fields) => {
			if (error) reject(error);
			resolve({ results, fields });
		})
	}),
	end: () => connection.end(),
}