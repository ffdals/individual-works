var mysql = require('mysql');
var dbConfig = require('./db.config');

module.exports = {
    query: function(sql, params, callback) {
        var connection = mysql.createConnection(dbConfig)
        connection.connect(function(err) {
            if (err) {
                throw err
            }
            connection.query(sql, params, function(err, results) {
                if (err) {
                    throw err
                }
                callback && callback(err, results);
                connection.end(function(err) {
                    if (err) {
                        throw err
                    }
                })
            })
        })
    }
}