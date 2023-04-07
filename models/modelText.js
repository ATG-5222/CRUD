const db = require('../util/database');

module.exports = class Text {

    static insertRegister(text) {
        return db.execute(
            'INSERT INTO test_text(text) VALUES (?)',[text]
        );
    }

    static fecthAll() {
        return db.execute(
            'SELECT * FROM test_text'
        );
    }

    static fecthRegisterById(id) {
        return db.execute(
            'SELECT * FROM test_text WHERE idTestText = id'
        );
    }

}