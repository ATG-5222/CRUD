const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
        console.log("Entrando a destination");
		callback(null, './assets/img');
	},
	filename: (req, file, callback) => {
        console.log("Entrando a filename");
        return callback(null,Date.now()+"-"+file.originalname);
	},
});

const upload = multer({ storage: storage });

module.exports = {upload};