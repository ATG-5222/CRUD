const db = require('../util/database');

module.exports = class Text {

    static insertRegister(text,route,name) {
        return db.execute(
            'INSERT INTO test_media(mediaDescription,mediaRoute,mediaName) VALUES (?,?,?)',
            [text,route,name]
        );
    }

    static fecthAll() {
        return db.execute(
            'SELECT * FROM test_media'
        );
    }

    static fetchPathById(id) {
        return db.execute(
            'SELECT mediaRoute FROM test_media WHERE idTestMedia=?',
            [id]
        );
    }

    static fetchArchiveNameById(id) {
        return db.execute(
            'SELECT mediaName FROM test_media WHERE idTestMedia=?',
            [id]
        );
    }

    static deleteRegisterById(id) {
        return db.execute(
            'DELETE FROM test_media WHERE idTestMedia=?',
            [id]
        );
    }

}