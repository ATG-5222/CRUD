const db = require('../util/database');

module.exports = class Text {

    static insertRegister(texto) {
        return db.execute(
            'INSERT INTO test-text (text) VALUES (?)',[texto]
        );
    }

}